"""
Принимает заявку с лендинга SpartakYogaPark: сохраняет в БД и отправляет уведомление в Telegram.
"""
import json
import os
import urllib.request
import psycopg2


def send_telegram(token: str, chat_id: str, text: str) -> None:
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({"chat_id": chat_id, "text": text, "parse_mode": "HTML"}).encode()
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=10)


def get_chat_id_from_updates(token: str) -> str:
    url = f"https://api.telegram.org/bot{token}/getUpdates"
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read())
    results = data.get("result", [])
    if not results:
        return ""
    last = results[-1]
    msg = last.get("message") or last.get("channel_post") or {}
    chat = msg.get("chat", {})
    return str(chat.get("id", ""))


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()
    park = (body.get("park") or "").strip()

    if not name or not phone or not park:
        return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Заполните все поля"})}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO leads (name, phone, park) VALUES (%s, %s, %s) RETURNING created_at",
        (name, phone, park),
    )
    row = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()

    created_at = row[0].strftime("%d.%m.%Y %H:%M") if row else "—"

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")

    if token:
        if not chat_id:
            try:
                chat_id = get_chat_id_from_updates(token)
            except Exception:
                chat_id = ""
        if chat_id:
            text = (
                "🌿 <b>Новая заявка — SpartakYogaPark</b>\n\n"
                f"👤 <b>Имя:</b> {name}\n"
                f"📞 <b>Телефон:</b> {phone}\n"
                f"🏞 <b>Парк:</b> {park}\n"
                f"🕐 <b>Дата и время:</b> {created_at}"
            )
            try:
                send_telegram(token, chat_id, text)
            except Exception:
                pass

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
