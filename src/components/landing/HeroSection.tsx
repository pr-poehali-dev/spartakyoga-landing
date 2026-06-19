import LeadForm from "@/components/landing/LeadForm";

const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/favicon-1778715807695.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#fafaf9]">
      <div className="max-w-3xl mx-auto px-5 text-center">
        {/* Фото тренера */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={PORTRAIT_URL}
            alt="Спартак Михайлович"
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-full object-cover border-4 border-[#e7e5e4] mb-3"
          />
          <p className="text-sm text-[#78716c]">
            <span className="font-medium text-[#1c1917]">Спартак Михайлович</span>
          </p>
        </div>

        <h1 className="font-cormorant text-[clamp(36px,7vw,72px)] text-[#1c1917] font-light leading-[1.05] mb-5">
          Хватит терпеть боль в спине. Правильное движение лечит.
        </h1>
        <p className="text-[#78716c] text-lg leading-relaxed mb-6 max-w-xl mx-auto">
          Индивидуальная онлайн йога в комфортном темпе — показываю движения и поправляю вас по камере. Никакой эзотерики. Обрети легкость и спокойствие в теле.
        </p>
        <p className="text-[#78716c] text-sm mb-6">
          До конца июля — <span className="whitespace-nowrap">1 000 ₽</span>. Потом — <span className="whitespace-nowrap">2 000 ₽</span>.
        </p>
        <LeadForm source="spartak.space / hero" goal="lead_hero" />
      </div>
    </section>
  );
}
