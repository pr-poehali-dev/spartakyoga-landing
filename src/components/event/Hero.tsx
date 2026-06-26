import { scrollToForm } from "@/components/event/scrollToForm";

const HERO_BG =
  "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/f2b1641f-a45d-4b87-9fab-a1159f1fdf4b.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <img
        src={HERO_BG}
        alt="Йога на мероприятии"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f2] via-[#f7f5f2]/85 to-[#f7f5f2]/40 md:to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 w-full py-20">
        <div className="max-w-2xl">
          <h1 className="font-cormorant text-[clamp(38px,7vw,76px)] font-semibold text-[#1c1917] leading-[1.04] mb-6">
            Йога на ваше мероприятие.
            <br />
            Приезжает команда тренеров.
          </h1>
          <p className="text-[#3a3a32] text-lg leading-relaxed mb-8 max-w-xl">
            Я веду практику — ассистентки поправляют каждого. Никто не делает
            неправильно. Работаем с юрлицами: чек из «Мой налог», без НДС.
          </p>
          <button
            onClick={() => scrollToForm()}
            className="rounded-full bg-[#2d4a1e] text-white text-base font-medium px-8 py-4 hover:bg-[#24401a] active:scale-[0.98] transition-all shadow-lg shadow-[#2d4a1e]/20"
          >
            Получить КП за 1 час
          </button>
          <p className="text-[#8a8a7a] text-sm mt-4">
            От 5 до 100+ человек. Любой формат.
          </p>
        </div>
      </div>
    </section>
  );
}
