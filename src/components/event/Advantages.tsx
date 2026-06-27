import Reveal from "@/components/event/Reveal";

const ITEMS = [
  {
    title: "Я веду лично",
    text: "Спартак Захаров, 10+ лет. Дикая Мята, корпоративы, частные ивенты. Без эзотерики — только тело, дыхание, тишина.",
  },
  {
    title: "Ассистенты поправляют каждого",
    text: "Девушки ходят между рядами и мягко поправляют участников. Каждый получает внимание — даже новичок чувствует себя уверенно.",
  },
  {
    title: "Любой уровень",
    text: "Программа подстраивается под аудиторию. От офисных сотрудников до топ-команд — всем комфортно.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-5xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1a1a1a] text-center mb-14">
            Почему выбирают нас
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold text-[#1a1a1a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
