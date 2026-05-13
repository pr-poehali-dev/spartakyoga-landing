import { useState } from "react";
import Icon from "@/components/ui/icon";

const PARKS = [
  "Сад Эрмитаж",
  "Таганский парк",
  "Красная Пресня",
  "Сокольники",
  "Измайловский",
  "Другой",
];

export default function FormSection() {
  const [form, setForm] = useState({ name: "", phone: "", park: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.park) return;

    setLoading(true);
    try {
      const urls = (window as Record<string, Record<string, string>>).func2url || {};
      const url = urls["submit-lead"] || "";
      if (url) {
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
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
        <p className="text-white/50 text-sm text-center mb-10">
          Свяжусь в течение нескольких часов
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/20">
            <div className="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={26} className="text-white" />
            </div>
            <h3 className="font-cormorant text-3xl text-white font-light mb-2">Спасибо!</h3>
            <p className="text-white/60 text-sm">Я свяжусь с вами в ближайшее время</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-4"
          >
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Имя</label>
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
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Телефон</label>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Парк</label>
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
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium text-sm hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-60 mt-2"
            >
              {loading ? "Отправляем..." : "Записаться на пробное занятие"}
            </button>
            <p className="text-center text-white/30 text-xs">
              Нажимая кнопку, вы соглашаетесь на обработку данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
