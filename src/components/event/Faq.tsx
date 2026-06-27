import { useState } from "react";
import Reveal from "@/components/event/Reveal";
import Icon from "@/components/ui/icon";

const FAQ = [
  {
    q: "Сколько человек может заниматься?",
    a: "Любое количество. Под каждый запрос собираю команду под размер группы. От 2 до 10+ тренеров. Было 80 человек на фестивале — справились вдвоём.",
  },
  {
    q: "Нужна подготовка?",
    a: "Нет. Программа под любой уровень.",
  },
  {
    q: "Что нужно для проведения?",
    a: "Коврики и вода. Остальное берём на себя. Можем привезти до 30 ковриков.",
  },
  {
    q: "Сколько стоит?",
    a: "От 25 000 ₽ в зависимости от формата. Оставьте номер — пришлю КП с тремя вариантами.",
  },
  {
    q: "Работаете с юрлицами?",
    a: "Да. Самозанятый. Предоставляю договор, акт и чек. НДС не облагается.",
  },
  {
    q: "Какой график?",
    a: "По согласованию. Подстроимся под ваше время.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#1a1a1a] text-base font-medium">{q}</span>
        <Icon
          name={open ? "Minus" : "Plus"}
          size={20}
          className="text-[#2d4a1e] flex-shrink-0"
        />
      </button>
      {open && <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1a1a1a] text-center mb-12">
            Частые вопросы
          </h2>
        </Reveal>
        <Reveal>
          <div>
            {FAQ.map((item) => (
              <Item key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}