const STEPS = [
  {
    title: "Я показываю — вы повторяете",
    desc: "Делаю упражнение, объясняю ключевые моменты",
  },
  {
    title: "Я поправляю — вы исправляете",
    desc: "Смотрю по камере, говорю что и как подкрутить",
  },
  {
    title: "Спрашиваете — я отвечаю",
    desc: "Можете остановить и задать вопрос",
  },
];

const NEEDS = [
  "Коврик для йоги",
  "Удобная одежда",
  "Камера (телефон или ноутбук)",
  "1 метр свободного пространства",
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-[80px] bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-[#1c1917] font-light mb-10">
          Как проходит тренировка
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-3">
              <span className="font-cormorant text-5xl text-[#2d4a1e] font-light leading-none">
                0{i + 1}
              </span>
              <h3 className="font-cormorant text-xl text-[#1c1917] font-medium">
                {step.title}
              </h3>
              <p className="text-[#78716c] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#f5f4f2] rounded-2xl p-8 border border-[#e7e5e4]">
          <h3 className="font-cormorant text-2xl text-[#1c1917] font-light mb-5">
            Что нужно для занятия
          </h3>
          <ul className="space-y-3">
            {NEEDS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#78716c] text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2d4a1e] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
