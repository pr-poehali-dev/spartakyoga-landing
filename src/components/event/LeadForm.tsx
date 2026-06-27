import { useState } from "react";
import Reveal from "@/components/event/Reveal";
import { reachGoal } from "@/lib/metrika";
import func2url from "../../../backend/func2url.json";

const LEAD_URL = func2url["lead"];

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
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const valid = isPhoneValid(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || loading) return;
    setLoading(true);
    try {
      await fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Заявка с сайта", phone }),
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
    <section id="lead-form" className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-md mx-auto px-5 text-center">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1a1a1a] mb-3">
            Обсудить мероприятие
          </h2>
          <p className="text-[#1a1a1a]/70 mb-10">Оставьте номер — пришлю предложение</p>
        </Reveal>

        <Reveal>
          {sent ? (
            <p className="font-cormorant text-2xl text-[#2d4a1e] font-semibold">
              Спасибо! Свяжусь в ближайшее время.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="tel"
                inputMode="numeric"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                onFocus={() => { if (!phone) setPhone("+7 ("); }}
                maxLength={18}
                required
                className="w-full rounded-xl bg-white border border-black/10 px-5 py-4 text-[#1a1a1a] placeholder-[#1a1a1a]/40 focus:outline-none focus:border-[#2d4a1e] transition-colors text-center"
              />
              <button
                type="submit"
                disabled={!valid || loading}
                className="w-full rounded-xl bg-[#2d4a1e] text-white text-base font-medium py-4 hover:bg-[#24401a] disabled:opacity-40 transition-colors"
              >
                {loading ? "Отправляю..." : "Получить предложение"}
              </button>
            </form>
          )}
        </Reveal>

        {!sent && (
          <p className="text-[#1a1a1a]/55 text-sm mt-5">
            Или напишите на почту:{" "}
            <a
              href="mailto:almaznayaspina@gmail.com"
              className="text-[#2d4a1e] hover:underline"
            >
              almaznayaspina@gmail.com
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
