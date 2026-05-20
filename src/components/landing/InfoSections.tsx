import Icon from "@/components/ui/icon";
import { reachGoal } from "@/lib/metrika";

const TRAINER_IMAGE =
  "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/bucket/4e4b7439-b9f9-47fe-b21b-96dee1016d0a.jpeg";

const PARKS = [
  "Парк Горького",
  "Сад Эрмитаж",
  "Таганский парк",
  "Красная Пресня",
  "Сокольники",
  "Измайловский",
];

const STEPS = [
  {
    icon: "MapPin",
    title: "Встречаемся в парке",
    text: "Выбираешь парк и приходишь с ковриком",
  },
  {
    icon: "Activity",
    title: "Практикуем 1,5 часа",
    text: "Суставная разминка, статика, спокойное завершение",
  },
  {
    icon: "Sun",
    title: "Уходишь с энергией",
    text: "Тело собрано, голова ясная, день удался",
  },
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

const OBJECTIONS = [
  {
    icon: "Sparkles",
    objection: "Никогда не занимался",
    answer: "80% начинали с нуля. Практика под любой уровень",
  },
  {
    icon: "StretchHorizontal",
    objection: "Не гибкий",
    answer: "Гибкость не важна. Йога про энергию и самочувствие",
  },
  {
    icon: "CloudRain",
    objection: "Вдруг дождь",
    answer: "Есть навес. Занимаемся при любой погоде",
  },
  {
    icon: "Wallet",
    objection: "Дороговато",
    answer: "938 ₽ за занятие по абонементу — дешевле массажа",
  },
];

const PRICES = [
  {
    label: "Пробное / разовое",
    price: "1 200 ₽",
    note: "Первый шаг",
    cta: "Хочу на пробное",
    goal: "click_cta",
    highlight: false,
  },
  {
    label: "Абонемент 4 занятия",
    price: "4 000 ₽",
    note: "1 000 ₽ за занятие",
    cta: "Выбрать абонемент",
    goal: "select_pack_4",
    highlight: false,
  },
  {
    label: "Абонемент 8 занятий",
    price: "7 500 ₽",
    note: "938 ₽ за занятие",
    cta: "Выбрать абонемент",
    goal: "select_pack_8",
    highlight: true,
    badge: "Самый выгодный",
  },
];

interface InfoSectionsProps {
  scrollToForm: () => void;
}

export default function InfoSections({ scrollToForm }: InfoSectionsProps) {
  return (
    <>
      {/* HOW IT GOES */}
      <section className="py-20 md:py-24 px-5 bg-background">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Как проходит занятие
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-14">
            Три простых шага
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <span className="absolute top-5 right-6 font-cormorant text-5xl text-emerald-light/80 leading-none select-none">
                  {i + 1}
                </span>
                <div className="w-12 h-12 bg-emerald-light rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    name={step.icon}
                    fallback="Circle"
                    size={22}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IN PARK */}
      <section className="py-20 md:py-24 px-5 bg-cream">
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
                  <Icon
                    name={card.icon}
                    fallback="Leaf"
                    size={22}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARKS */}
      <section className="py-20 md:py-24 px-5 bg-background relative overflow-hidden">
        <div
          className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(158 45% 28%), transparent)",
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Площадки
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-10">
            Парки
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {PARKS.map((park) => (
              <span
                key={park}
                className="px-5 py-2.5 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
              >
                <Icon
                  name="MapPin"
                  size={13}
                  className="inline-block text-primary mr-1.5 -mt-0.5"
                />
                {park}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Проверенные площадки с туалетом и навесом от дождя. Если твой парк
            не в списке —{" "}
            <button
              onClick={scrollToForm}
              className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              напиши
            </button>
            , договоримся.
          </p>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="py-20 md:py-24 px-5 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Сомнения
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-14">
            Всё ещё{" "}
            <em className="not-italic text-primary">сомневаешься?</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {OBJECTIONS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 bg-emerald-light rounded-xl flex items-center justify-center">
                    <Icon
                      name={item.icon}
                      fallback="HelpCircle"
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1 italic">
                      «{item.objection}»
                    </p>
                    <p className="text-foreground font-medium leading-snug">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => {
                reachGoal("click_cta");
                scrollToForm();
              }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/25"
            >
              Хочу на пробное — 1 200 ₽
            </button>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section className="py-20 md:py-24 px-5 bg-background">
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
                <p
                  className={`text-sm mb-3 ${
                    p.highlight
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {p.label}
                </p>
                <p
                  className={`font-cormorant text-4xl font-semibold mb-1 ${
                    p.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {p.price}
                </p>
                <p
                  className={`text-xs ${
                    p.highlight
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {p.note}
                </p>
                <button
                  onClick={() => {
                    reachGoal(p.goal);
                    scrollToForm();
                  }}
                  className={`mt-6 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    p.highlight
                      ? "bg-white text-primary hover:bg-white/90 active:scale-95"
                      : "bg-secondary text-foreground hover:bg-primary/10 active:scale-95"
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINER */}
      <section className="py-20 md:py-24 px-5 bg-cream">
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
                <p className="text-xs text-primary-foreground/70">
                  лет практики
                </p>
              </div>
            </div>
            <div>
              <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3">
                Тренер
              </p>
              <h2 className="font-cormorant text-5xl md:text-6xl text-foreground font-light mb-6 leading-tight">
                Привет, я{" "}
                <em className="not-italic text-primary">Спартак</em>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  10+ лет практики. Прошёл путь от спорта к йоге через травмы.
                </p>
                <p>
                  Не играю в гуру. Никаких «открой сознание» — только реальная
                  работа с телом, которая помогает.
                </p>
              </div>
              <button
                onClick={scrollToForm}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
              >
                Записаться к Спартаку
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}