import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { reachGoal } from "@/lib/metrika";

const PARKS = [
  "Парк Горького",
  "Сад Эрмитаж",
  "Таганский парк",
  "Красная Пресня",
  "Сокольники",
  "Измайловский",
  "Другой",
];

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

const getDigits = (value: string): string => value.replace(/\D/g, "");

const isPhoneValid = (value: string): boolean => {
  const digits = getDigits(value);
  return digits.length === 11 && (digits[0] === "7" || digits[0] === "8");
};

export default function FormSection() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", park: "" });
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneValid = isPhoneValid(form.phone);
  const showPhoneError = phoneTouched && form.phone.length > 0 && !phoneValid;
  const canSubmit =
    form.name.trim().length > 0 && phoneValid && form.park.length > 0;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, phone: formatPhone(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    try {
      await fetch("https://functions.poehali.dev/b8418e48-8714-49ce-9d5a-51c95ff6579e", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      reachGoal("lead");
    } catch {
      // Заявка могла дойти — всё равно ведём на спасибо
    } finally {
      setLoading(false);
      navigate("/spasibo");
    }
  };

  return (
    <section id="form-section" className="py-24 px-5 bg-forest relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, hsl(158 45% 60%), transparent 60%), radial-gradient(circle at 80% 20%, hsl(158 60% 40%), transparent 50%)",
        }}
      />
      <div className="relative z-10 max-w-xl mx-auto">
        <p className="text-sage text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
          Запись
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light text-center mb-3">
          Записаться на пробное
        </h2>
        <p className="text-white/60 text-sm text-center mb-10">
          Оставь заявку — свяжусь и подтвержу место
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-4"
        >
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                Имя
              </label>
              <input
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                Телефон
              </label>
              <input
                type="tel"
                inputMode="numeric"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={handlePhoneChange}
                onFocus={() => {
                  if (!form.phone) setForm({ ...form, phone: "+7 (" });
                }}
                onBlur={() => setPhoneTouched(true)}
                maxLength={18}
                required
                aria-invalid={showPhoneError}
                className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none transition-colors text-sm ${
                  showPhoneError
                    ? "border-red-400/70 focus:border-red-400"
                    : "border-white/20 focus:border-white/50"
                }`}
              />
              {showPhoneError && (
                <p className="mt-2 text-xs text-red-300 flex items-center gap-1.5">
                  <Icon name="AlertCircle" size={13} />
                  Введите корректный номер телефона
                </p>
              )}
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                Парк
              </label>
              <select
                value={form.park}
                onChange={(e) => setForm({ ...form, park: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors text-sm appearance-none cursor-pointer"
                style={{ colorScheme: "dark" }}
              >
                <option value="" disabled className="bg-forest text-white">
                  Выберите парк
                </option>
                {PARKS.map((park) => (
                  <option key={park} value={park} className="bg-forest text-white">
                    {park}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={!canSubmit || loading}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium text-sm hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 mt-2"
            >
              {loading ? "Отправляем..." : "Хочу на пробное"}
            </button>
            <p className="text-center text-white/30 text-xs">
              Нажимая кнопку, вы соглашаетесь на обработку данных
            </p>
          </form>
      </div>
    </section>
  );
}