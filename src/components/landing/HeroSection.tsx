import Icon from "@/components/ui/icon";
import { reachGoal } from "@/lib/metrika";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/bucket/099d60e3-845f-4bb2-91ed-f85be2907908.jpg";

interface HeroSectionProps {
  scrollToForm: () => void;
}

export default function HeroSection({ scrollToForm }: HeroSectionProps) {
  return (
    <>
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
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Йога в парке"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/60 to-forest/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 py-24 md:py-36 w-full">
          <div className="max-w-2xl">
            <p
              className="text-sage text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 animate-fade-up opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Москва · На свежем воздухе
            </p>
            <h1
              className="font-cormorant text-4xl sm:text-5xl md:text-7xl text-white font-light leading-[1.05] mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              Йога на свежем воздухе
              <em className="block font-light not-italic text-emerald-light mt-1">
                в парках Москвы
              </em>
            </h1>
            <p
              className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl animate-fade-up opacity-0"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              Каждое утро в 8:00 и каждый вечер в 19:30. Формат 1,5 часа.
              Пробное — 1 200 ₽. Без эзотерики — просто практика для тела и
              энергии.
            </p>
            <div
              className="animate-fade-up opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => {
                  reachGoal("click_cta");
                  scrollToForm();
                }}
                className="bg-primary text-primary-foreground px-7 sm:px-9 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-xl shadow-primary/40"
              >
                Хочу на пробное — 1 200 ₽
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60">
          <Icon name="ChevronDown" size={24} className="text-white" />
        </div>
      </section>
    </>
  );
}