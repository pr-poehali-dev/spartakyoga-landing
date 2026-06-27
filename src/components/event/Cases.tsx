import Reveal from "@/components/event/Reveal";

const CASES = [
  {
    title: "40 человек на корпоративе — остались 38",
    text: "IT-компания, летний корпоратив. Половина никогда не пробовала йогу, половина — скептики. Приехали с двумя ассистентами. Я вёл — девушки поправляли каждого. Самый скептичный программист улыбался через 20 минут. Через месяц подписали регулярные занятия в офисе.",
  },
  {
    title: "80 человек на фестивале в 10 утра — 78 остались до конца",
    text: "Дикая Мята. Ночь была громкой. Люди сонные, коврики мокрые от росы. Начали с дыхания лёжа — без команд, без нагрузки. Через 15 минут половина ожила. После этого позвали ещё на 3 фестиваля.",
  },
  {
    title: "Госорганизация, 12 месяцев без единой замены",
    text: "Запрос по 223-ФЗ, техзадание. Самозанятый — чек через «Мой налог». Бухгалтерия приняла, вопросов не было. 2 раза в неделю, 12 месяцев, ни одной отмены.",
  },
];

export default function Cases() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1a1a1a] text-center mb-14">
            Результаты
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold text-[#2d4a1e] mb-4 leading-tight">
                  {c.title}
                </h3>
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
