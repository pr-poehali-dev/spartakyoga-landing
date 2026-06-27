import Reveal from "@/components/event/Reveal";
import { scrollToForm } from "@/components/event/scrollToForm";

const FORMATS = [
  {
    title: "Корпоратив",
    text: "Тимбилдинг, день компании. Приезжаем в офис или на площадку. 1,5-2 часа.",
  },
  {
    title: "Фестиваль",
    text: "Сцена, поляна, шатёр. От 15 минут до целого дня. Любое количество.",
  },
  {
    title: "Частное событие",
    text: "Девичник, день рождения, свадьба. Гости запомнят.",
  },
  {
    title: "Регулярная в офисе",
    text: "Каждую неделю. Вт/Чт утром или после работы.",
  },
];

export default function Formats() {
  return (
    <section id="formats" className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-5xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1a1a1a] text-center mb-14">
            Форматы
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {FORMATS.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="flex flex-col">
                <h3 className="font-cormorant text-2xl font-semibold text-[#1a1a1a] mb-2">
                  {f.title}
                </h3>
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-5">
                  {f.text}
                </p>
                <button
                  onClick={() => scrollToForm()}
                  className="self-start rounded-full border border-[#2d4a1e] text-[#2d4a1e] text-sm font-medium px-6 py-2.5 hover:bg-[#2d4a1e] hover:text-white transition-colors"
                >
                  Узнать стоимость
                </button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-center text-[#1a1a1a]/55 text-[15px] mt-12">
            Не нашли свой формат? Напишите — подберём под вас.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
