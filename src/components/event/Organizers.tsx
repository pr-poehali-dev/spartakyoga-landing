import Reveal from "@/components/event/Reveal";
import Icon from "@/components/ui/icon";
import { scrollToForm } from "@/components/event/scrollToForm";

const POINTS = [
  "Йога подходит любому возрасту и полу",
  "Минимум хлопот: приезжаем, проводим, уезжаем",
  "Всё оборудование можем взять с собой",
  "Работаем официально: самозанятый, чек из «Мой налог», НДС не облагается (422-ФЗ)",
  "Предоставляем все документы для бухгалтерии",
];

export default function Organizers() {
  return (
    <section id="organizers" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1c1917] mb-6">
            Организаторам мероприятий
          </h2>
          <p className="text-[#3a3a32] text-lg leading-relaxed mb-8">
            Ищете активность, которая понравится всем — от новичка до профи?
          </p>
        </Reveal>
        <ul className="space-y-4 mb-10">
          {POINTS.map((p, i) => (
            <Reveal key={p} delay={i * 80}>
              <li className="flex items-start gap-3">
                <Icon
                  name="Check"
                  size={20}
                  className="text-[#2d4a1e] flex-shrink-0 mt-0.5"
                />
                <span className="text-[#3a3a32] text-[15px] leading-relaxed">{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <button
            onClick={() => scrollToForm()}
            className="rounded-full bg-[#2d4a1e] text-white text-base font-medium px-8 py-4 hover:bg-[#24401a] active:scale-[0.98] transition-all"
          >
            Получить КП
          </button>
        </Reveal>
      </div>
    </section>
  );
}
