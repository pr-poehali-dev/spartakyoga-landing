const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/favicon-1778715807695.jpg";

export default function TrainerSection() {
  return (
    <section id="trainer" className="py-20 md:py-[80px] bg-[#f5f4f2]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <img
            src={PORTRAIT_URL}
            alt="Спартак Захаров"
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-full object-cover border-4 border-[#e7e5e4] flex-shrink-0"
          />
          <div>
            <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-[#1c1917] font-light mb-4">
              Спартак
            </h2>
            <p className="text-[#78716c] text-lg leading-[1.8]">
              10+ лет практики, 5+ лет преподавания. Вёл практики на крупных фестивалях:
              Дикая Мята, Равновесие, Сказка. Работал с любым уровнем — от новичков до профи.
              Теперь провожу индивидуальные тренировки онлайн.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
