import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NEXT_STEPS = [
  {
    icon: "Phone",
    title: "Позвоню или напишу",
    text: "В течение нескольких часов свяжусь по указанному телефону",
  },
  {
    icon: "Calendar",
    title: "Подтвердим занятие",
    text: "Выберем удобный день и время, пришлю точку встречи в парке",
  },
  {
    icon: "Sparkles",
    title: "Встретимся в парке",
    text: "Приходи с ковриком и удобной одеждой — остальное за мной",
  },
];

export default function Spasibo() {
  useEffect(() => {
    document.title = "Спасибо! — SpartakYogaPark";
  }, []);

  return (
    <div className="min-h-screen bg-forest font-golos relative overflow-hidden px-5 py-16 flex items-center">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, hsl(158 45% 60%), transparent 60%), radial-gradient(circle at 80% 20%, hsl(158 60% 40%), transparent 50%)",
        }}
      />
      <div className="relative z-10 max-w-2xl w-full mx-auto">
        {/* HERO CARD */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-white/20 text-center">
          <div className="w-20 h-20 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Check" size={38} className="text-white" />
          </div>
          <p className="text-sage text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Заявка принята
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl text-white font-light mb-5 leading-tight">
            Спасибо!
          </h1>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            Я свяжусь с вами в ближайшее время и пришлю расписание ближайших
            занятий.
          </p>
        </div>

        {/* NEXT STEPS */}
        <div className="mt-10">
          <p className="text-sage text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Что дальше
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl text-white font-light text-center mb-8">
            Три шага до первого занятия
          </h2>

          <ol className="space-y-4">
            {NEXT_STEPS.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/20"
              >
                <div className="relative shrink-0">
                  <div className="w-12 h-12 bg-primary/40 rounded-xl flex items-center justify-center">
                    <Icon
                      name={step.icon}
                      fallback="Circle"
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="font-cormorant text-xl font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-10 space-y-3">
          <a
            href="https://t.me/SpartakYogaPark"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            <Icon name="Send" size={16} />
            Подписаться на Telegram-канал
          </a>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full bg-white/10 text-white py-4 rounded-xl font-medium text-sm hover:bg-white/15 active:scale-95 transition-all duration-200 border border-white/20"
          >
            <Icon name="ArrowLeft" size={16} />
            Вернуться на сайт
          </Link>
        </div>
      </div>
    </div>
  );
}
