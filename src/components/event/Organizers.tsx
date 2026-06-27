import Reveal from "@/components/event/Reveal";
import Icon from "@/components/ui/icon";

const POINTS = [
  "Активность, которая понравится всем: от новичка до профи",
  "Минимум хлопот: приезжаем, проводим, уезжаем",
  "Коврики (до 30 шт) можем привезти с собой",
  "Работаем официально: договор, акт, чек для бухгалтерии",
];

export default function Organizers() {
  return (
    <section id="organizers" className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1a1a1a] mb-10">
            Организаторам
          </h2>
        </Reveal>
        <ul className="space-y-4">
          {POINTS.map((p, i) => (
            <Reveal key={p} delay={i * 80}>
              <li className="flex items-start gap-3">
                <Icon
                  name="Check"
                  size={20}
                  className="text-[#2d4a1e] flex-shrink-0 mt-0.5"
                />
                <span className="text-[#1a1a1a]/75 text-[15px] leading-relaxed">{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
