import json
import os
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    '''
    Принимает заявку с лендинга и отправляет её в Telegram организатору.
    Args: event с httpMethod, body (name, phone, format, comment); context с request_id
    Returns: HTTP-ответ со статусом отправки
    '''
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        body = {}

    name = (body.get('name') or '').strip()
    phone = (body.get('phone') or '').strip()
    fmt = (body.get('format') or 'Не указан').strip()
    comment = (body.get('comment') or '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}),
        }

    token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')

    text = (
        f'Новый лид!\n'
        f'Имя: {name}\n'
        f'Телефон: {phone}\n'
        f'Формат: {fmt}\n'
        f'Комментарий: {comment or "—"}'
    )

    api_url = f'https://api.telegram.org/bot{token}/sendMessage'
    data = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode()

    req = urllib.request.Request(api_url, data=data, method='POST')
    with urllib.request.urlopen(req, timeout=10) as resp:
        resp.read()

    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'body': json.dumps({'ok': True}),
    }
