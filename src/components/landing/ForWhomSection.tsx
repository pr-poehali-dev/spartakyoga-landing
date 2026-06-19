import LeadForm from "@/components/landing/LeadForm";

const CARDS = [
  { title: "Никогда не занимались", desc: "Разберём каждое движение с нуля" },
  { title: "Болит спина", desc: "Мягкая работа, без рывков и боли" },
  { title: "Негибкий", desc: "Гибкость не нужна, работаем с тем что есть" },
  { title: "Хочу снять стресс", desc: "Дыхание, расслабление, покой" },
  { title: "Есть опыт", desc: "Углублённая практика под ваш уровень" },
];

export default function ForWhomSection() {
  return (
    <section id="for-whom" className="py-20 bg-[#f5f4f2]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-[#1c1917] font-light mb-10 text-center">
          Кому подходит
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl p-6 border border-[#e7e5e4] text-center">
              <h3 className="font-cormorant text-xl text-[#1c1917] font-medium mb-2">{card.title}</h3>
              <p className="text-[#78716c] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
        <LeadForm source="spartak.space / for-whom" goal="lead_forwhom" />
      </div>
    </section>
  );
}
