import { useState, useEffect } from "react";
import Reveal from "@/components/event/Reveal";
import { reachGoal } from "@/lib/metrika";
import func2url from "../../../backend/func2url.json";

const LEAD_URL = func2url["lead"];

const FORMATS = ["Корпоратив", "Фестиваль", "Частное", "Регулярная в офисе", "Другое"];

const formatPhone = (raw: string): string => {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7")) digits = "7" + digits;
  digits = digits.slice(0, 11);
  const d = digits.slice(1);
  let result = "+7";
  if (d.length === 0) return result;
  result += " (" + d.slice(0, 3);
  if (d.length < 3) return result;
  result += ") " + d.slice(3, 6);
  if (d.length < 6) return result;
  result += "-" + d.slice(6, 8);
  if (d.length < 8) return result;
  result += "-" + d.slice(8, 10);
  return result;
};

const isPhoneValid = (value: string) => value.replace(/\D/g, "").length === 11;

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [format, setFormat] = useState(FORMATS[0]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onPreset = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      if (FORMATS.includes(detail)) setFormat(detail);
    };
    window.addEventListener("preset-format", onPreset);
    return () => window.removeEventListener("preset-format", onPreset);
  }, []);

  const valid = name.trim().length > 0 && isPhoneValid(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || loading) return;
    setLoading(true);
    try {
      await fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, format, comment }),
      });
      reachGoal("lead_submit");
    } catch {
      // отправка могла пройти
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <section id="lead-form" className="py-20 md:py-28 bg-[#2d4a1e]">
      <div className="max-w-xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-white text-center mb-3">
            Обсудить мероприятие
          </h2>
          <p className="text-white/70 text-center mb-10">
            Оставьте заявку — пришлю КП с тремя вариантами за 1 час
          </p>
        </Reveal>

        <Reveal>
          {sent ? (
            <div className="rounded-2xl bg-white p-10 text-center">
              <p className="font-cormorant text-2xl text-[#1c1917] font-semibold mb-2">
                Спасибо!
              </p>
              <p className="text-[#3a3a32]">
                Свяжусь с вами в ближайшее время. Обычно отвечаю в течение часа.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl bg-white px-5 py-4 text-[#1c1917] placeholder-[#8a8a7a] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                onFocus={() => { if (!phone) setPhone("+7 ("); }}
                maxLength={18}
                required
                className="w-full rounded-xl bg-white px-5 py-4 text-[#1c1917] placeholder-[#8a8a7a] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full rounded-xl bg-white px-5 py-4 text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
              >
                {FORMATS.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
              <textarea
                placeholder="Комментарий (необязательно)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
                className="w-full rounded-xl bg-white px-5 py-4 text-[#1c1917] placeholder-[#8a8a7a] focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              />
              <button
                type="submit"
                disabled={!valid || loading}
                className="w-full rounded-xl bg-[#1c1917] text-white text-base font-medium py-4 hover:bg-black disabled:opacity-40 transition-all"
              >
                {loading ? "Отправляю..." : "Получить предложение"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
