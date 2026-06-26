import Reveal from "@/components/event/Reveal";
import Icon from "@/components/ui/icon";
import { scrollToForm } from "@/components/event/scrollToForm";

const FORMATS = [
  {
    icon: "Building2",
    title: "Корпоратив",
    text: "Тимбилдинг, день компании, Новый год. Приезжаем в офис или на площадку. 1,5-2 часа.",
    preset: "Корпоратив",
  },
  {
    icon: "Tent",
    title: "Фестиваль",
    text: "Сцена, поляна, шатёр. Под ключ: от 15 минут до целого дня. Любое количество человек.",
    preset: "Фестиваль",
  },
  {
    icon: "PartyPopper",
    title: "Частное событие",
    text: "Девичник, день рождения, юбилей, свадьба. Создаём атмосферу — гости запомнят.",
    preset: "Частное",
  },
  {
    icon: "CalendarClock",
    title: "Регулярная в офисе",
    text: "Каждую неделю. Вторник/четверг утром или после работы. Повышаем энергию команды на постоянке.",
    preset: "Регулярная в офисе",
  },
];

export default function Formats() {
  return (
    <section id="formats" className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1c1917] text-center mb-12">
            Форматы
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FORMATS.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white border border-black/5 p-8 flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#2d4a1e]/10 flex items-center justify-center mb-5">
                  <Icon name={f.icon} size={22} className="text-[#2d4a1e]" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[#1c1917] mb-2">
                  {f.title}
                </h3>
                <p className="text-[#3a3a32] text-[15px] leading-relaxed mb-6 flex-1">
                  {f.text}
                </p>
                <button
                  onClick={() => scrollToForm(f.preset)}
                  className="self-start rounded-full border border-[#2d4a1e] text-[#2d4a1e] text-sm font-medium px-6 py-2.5 hover:bg-[#2d4a1e] hover:text-white transition-colors"
                >
                  Узнать стоимость
                </button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="text-center text-[#8a8a7a] text-[15px] mt-10">
            Не нашли свой формат? Напишите — подберём под вас.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
