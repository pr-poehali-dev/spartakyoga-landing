import { useState } from "react";
import { reachGoal } from "@/lib/metrika";

const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/favicon-1778715807695.jpg";

const TG_LINK = "https://t.me/spartakmihailovich";
const FORM_URL = "https://functions.poehali.dev/bf54092e-43e5-4114-9ade-aa9f3a5b54a2";

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

export default function HeroSection() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPhoneValid(phone) || loading) return;
    setLoading(true);
    try {
      await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, message: "Заявка с spartak.space" }),
      });
      reachGoal("lead_hero");
    } catch {
      // отправка могла пройти
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <>
      {/* HERO */}
      <section id="hero" className="pt-20 pb-20 md:pt-28 md:pb-28 bg-[#fafaf9]">
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
            {/* Text */}
            <div className="max-w-2xl">
              <h1 className="font-cormorant text-[clamp(40px,7vw,72px)] text-[#1c1917] font-light leading-[1.05] mb-5">
                Хватит терпеть боль в спине. Правильное движение лечит.
              </h1>
              <p className="text-[#78716c] text-lg leading-relaxed mb-8 max-w-xl">
                Индивидуальная онлайн йога в комфортном темпе — показываю движения и поправляю вас по камере. Никакой эзотерики. Обрети легкость и спокойствие в теле.
              </p>
              <p className="mt-4 text-[#78716c] text-sm">
                До конца июля — <span className="whitespace-nowrap">1 000 ₽</span>. Потом — <span className="whitespace-nowrap">2 000 ₽</span>.
              </p>

              {/* Форма */}
              {sent ? (
                <p className="mt-5 text-[#2d4a1e] text-sm font-medium">
                  Заявка принята — отвечу в течение часа.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 flex gap-2 max-w-sm">
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="+7 ..."
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    onFocus={() => { if (!phone) setPhone("+7 ("); }}
                    maxLength={18}
                    required
                    className="flex-1 border border-[#d6d3d1] rounded-full px-4 py-3 text-sm text-[#1c1917] placeholder-[#a8a29e] focus:outline-none focus:border-[#2d4a1e] bg-white transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!isPhoneValid(phone) || loading}
                    style={{ borderRadius: "100px", backgroundColor: "#2d4a1e" }}
                    className="px-6 py-3 text-white text-sm font-medium hover:opacity-90 disabled:opacity-40 transition-all"
                  >
                    {loading ? "..." : "Записаться"}
                  </button>
                </form>
              )}
            </div>

            {/* Portrait */}
            <div className="flex flex-col items-center md:items-end flex-shrink-0">
              <img
                src={PORTRAIT_URL}
                alt="Спартак"
                width={200}
                height={200}
                className="w-[200px] h-[200px] rounded-full object-cover border-4 border-[#e7e5e4]"
              />
              <p className="mt-4 text-center md:text-right text-sm text-[#78716c] max-w-[220px]">
                <span className="block font-medium text-[#1c1917]">Спартак Михайлович</span>
                преподаю йогу 10 лет
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}