import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Spasibo() {
  useEffect(() => {
    document.title = "Спасибо! — SpartakYogaPark";
  }, []);

  return (
    <div className="min-h-screen bg-forest font-golos relative overflow-hidden flex items-center justify-center px-5 py-16">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, hsl(158 45% 60%), transparent 60%), radial-gradient(circle at 80% 20%, hsl(158 60% 40%), transparent 50%)",
        }}
      />
      <div className="relative z-10 max-w-xl w-full bg-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-white/20 text-center">
        <div className="w-20 h-20 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Check" size={38} className="text-white" />
        </div>
        <p className="text-sage text-xs font-medium tracking-[0.2em] uppercase mb-3">
          Заявка принята
        </p>
        <h1 className="font-cormorant text-5xl md:text-6xl text-white font-light mb-5 leading-tight">
          Спасибо!
        </h1>
        <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8">
          Я свяжусь с вами в ближайшее время и пришлю расписание ближайших
          занятий.
        </p>

        <div className="space-y-3">
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
