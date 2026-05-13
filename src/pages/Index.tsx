import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/59576993-5a21-405a-955c-e87ecbb046e1.jpg";
const TRAINER_IMAGE = "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/66d57236-99fe-4853-a285-ee2050756d15.jpg";

const PARKS = [
  "Сад Эрмитаж",
  "Таганский парк",
  "Красная Пресня",
  "Сокольники",
  "Измайловский",
  "Другой",
];

const WHY_CARDS = [
  {
    icon: "Clock",
    title: "1,5 часа вместо 60 минут",
    text: "В студии ты ограничен таймингом. В парке не смотришь на часы",
  },
  {
    icon: "Wind",
    title: "Воздух вместо кондиционера",
    text: "Свежий воздух, земля под ногами, небо над головой",
  },
  {
    icon: "Leaf",
    title: "Без эзотерики",
    text: "Никаких «открой чакры». Просто понятная практика",
  },
  {
    icon: "Users",
    title: "Маленькая группа",
    text: "Я вижу каждого, поправляю, подстраиваю программу",
  },
];

const PRICES = [
  {
    label: "Пробное / разовое",
    price: "1 200 ₽",
    note: "Первый шаг",
    highlight: false,
  },
  {
    label: "Абонемент 4 занятия",
    price: "4 000 ₽",
    note: "1 000 ₽ за занятие",
    highlight: false,
  },
  {
    label: "Абонемент 8 занятий",
    price: "7 500 ₽",
    note: "938 ₽ за занятие",
    highlight: true,
    badge: "Самый выгодный",
  },
];

const FAQ_ITEMS = [
  {
    q: "Подойдёт ли мне, если я никогда не занимался?",
    a: "Да. Занятия построены так, чтобы было комфортно и новичкам, и тем, кто занимается давно. Я подстраиваю нагрузку индивидуально.",
  },
  {
    q: "Что брать с собой?",
    a: "Коврик (можно одолжить у меня), удобную одежду, воду. Больше ничего не нужно.",
  },
  {
    q: "Если дождь?",
    a: "Занятие переносится или отменяется. Я предупреждаю за несколько часов в Telegram.",
  },
  {
    q: "Где расписание?",
    a: "Актуальное расписание — в Telegram-боте @spartakyogapark_bot. Там же можно записаться.",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", park: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

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
    <div className="min-h-screen bg-background font-golos">
      {/* HEADER / NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <span className="font-cormorant font-semibold text-xl text-foreground tracking-wide">
            SpartakYogaPark
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/SpartakYogaPark"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:opacity-75 transition-opacity"
            >
              <Icon name="Send" size={16} />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a
              href="https://max.ru/join/-5rZSTR_Yu0HQJAsQgOwVJAo-hZlt1rS7_Fu8UsOmnc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:opacity-75 transition-opacity"
            >
              <Icon name="MessageCircle" size={16} />
              <span className="hidden sm:inline">Max</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Йога в парке"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 py-24 md:py-36">
          <div className="max-w-xl">
            <p className="text-sage text-sm font-medium tracking-[0.2em] uppercase mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Москва · На свежем воздухе
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl text-white font-light leading-[1.1] mb-5 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Йога на свежем воздухе
              <em className="block font-light not-italic text-emerald-light">
                в парках Москвы
              </em>
            </h1>
            <p className="text-white/80 text-lg mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
              Занятия по 1,5 часа.&ensp;Пробное — 1 200 ₽
            </p>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <button
                onClick={scrollToForm}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                Записаться на пробное
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60">
          <Icon name="ChevronDown" size={24} className="text-white" />
        </div>
      </section>

      {/* WHY IN PARK */}
      <section className="py-24 px-5 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Почему в парке
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-14">
            Что делает эти занятия{" "}
            <em className="not-italic text-primary">особенными</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon name={card.icon} fallback="Leaf" size={22} className="text-primary" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARKS */}
      <section className="py-24 px-5 bg-background relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(158 45% 28%), transparent)" }}
        />
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Площадки
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-10">
            Парки Москвы
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {PARKS.filter((p) => p !== "Другой").map((park) => (
              <span
                key={park}
                className="px-5 py-2.5 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
              >
                <Icon name="MapPin" size={13} className="inline-block text-primary mr-1.5 -mt-0.5" />
                {park}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Эти площадки на стадии согласования. Если ваш парк не в списке —{" "}
            <a
              href="https://t.me/spartakyogapark_bot"
              className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              напишите
            </a>
            , договоримся.
          </p>
        </div>
      </section>

      {/* PRICES */}
      <section className="py-24 px-5 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Стоимость
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-14">
            Цены
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRICES.map((p, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  p.highlight
                    ? "bg-primary border-primary text-primary-foreground shadow-xl shadow-primary/25"
                    : "bg-white border-border hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-semibold px-4 py-1 rounded-full border border-primary/20 shadow-sm whitespace-nowrap">
                    {p.badge}
                  </span>
                )}
                <p className={`text-sm mb-3 ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.label}
                </p>
                <p className={`font-cormorant text-4xl font-semibold mb-1 ${p.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {p.price}
                </p>
                <p className={`text-xs ${p.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {p.note}
                </p>
                <button
                  onClick={scrollToForm}
                  className={`mt-6 w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    p.highlight
                      ? "bg-white text-primary hover:bg-white/90 active:scale-95"
                      : "bg-secondary text-foreground hover:bg-primary/10 active:scale-95"
                  }`}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINER */}
      <section className="py-24 px-5 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src={TRAINER_IMAGE}
                  alt="Спартак — инструктор"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-6 py-4 hidden md:block shadow-lg">
                <p className="font-cormorant text-3xl font-semibold">10+</p>
                <p className="text-xs text-primary-foreground/70">лет практики</p>
              </div>
            </div>
            <div>
              <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3">
                Инструктор
              </p>
              <h2 className="font-cormorant text-5xl md:text-6xl text-foreground font-light mb-6 leading-tight">
                Привет, я{" "}
                <em className="not-italic text-primary">Спартак</em>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>10+ лет практики. Прошёл путь от спорта к йоге через травмы.</p>
                <p>
                  Не играю в гуру. Никаких «открой своё сознание» — только реальная работа с телом, которая помогает.
                </p>
                <p>
                  Веду маленькие группы, чтобы видеть каждого и давать обратную связь лично.
                </p>
              </div>
              <div className="flex gap-3 mt-8">
                <a
                  href="https://t.me/spartakyogapark_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
                >
                  <Icon name="Send" size={15} />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
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

      {/* FAQ */}
      <section className="py-24 px-5 bg-background">
        <div className="max-w-2xl mx-auto">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Вопросы
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-12">
            Часто спрашивают
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-sm text-foreground pr-4">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={`text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest text-white py-12 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-cormorant text-2xl font-light mb-2">SpartakYogaPark</p>
              <p className="text-white/40 text-sm">Йога на свежем воздухе в парках Москвы</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Контакты</p>
              <div className="space-y-2">
                <a
                  href="tel:+79969971527"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Phone" size={14} />
                  +7 996 997 15 27
                </a>
                <a
                  href="mailto:almaznayaspina@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Mail" size={14} />
                  almaznayaspina@gmail.com
                </a>
              </div>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Соцсети</p>
              <div className="space-y-2">
                <a
                  href="https://t.me/SpartakYogaPark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Send" size={14} />
                  Telegram-канал
                </a>
                <a
                  href="https://max.ru/join/-5rZSTR_Yu0HQJAsQgOwVJAo-hZlt1rS7_Fu8UsOmnc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="MessageCircle" size={14} />
                  Max
                </a>
                <a
                  href="https://t.me/spartakyogapark_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Bot" size={14} />
                  @spartakyogapark_bot
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/25 text-xs text-center">© 2024 SpartakYogaPark · Москва</p>
          </div>
        </div>
      </footer>
    </div>
  );
}