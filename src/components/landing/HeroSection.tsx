import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/59576993-5a21-405a-955c-e87ecbb046e1.jpg";

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
    </>
  );
}
