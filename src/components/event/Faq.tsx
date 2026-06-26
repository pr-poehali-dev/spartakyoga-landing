import { useState } from "react";
import Reveal from "@/components/event/Reveal";
import Icon from "@/components/ui/icon";

const FAQ = [
  {
    q: "Сколько человек может заниматься одновременно?",
    a: "От 5 до 30. Если больше — делим на группы.",
  },
  {
    q: "Нужна ли подготовка?",
    a: "Нет. Подходит любому уровню. Мы подстраиваем программу под аудиторию.",
  },
  {
    q: "Что нужно для проведения?",
    a: "Коврики (вы или мы), вода. Всё остальное берём на себя.",
  },
  {
    q: "Сколько стоит?",
    a: "Зависит от формата и количества человек. Оставьте заявку — пришлю КП с тремя вариантами за час.",
  },
  {
    q: "Работаете с юрлицами?",
    a: "Да. Я самозанятый, формирую чек в приложении «Мой налог» после оплаты. НДС не облагается. Для бухгалтерии это полноценный закрывающий документ.",
  },
  {
    q: "Какой график?",
    a: "По согласованию с вами. Подстроимся под ваше время.",
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
        <span className="text-[#1c1917] text-base font-medium">{q}</span>
        <Icon
          name={open ? "Minus" : "Plus"}
          size={20}
          className="text-[#2d4a1e] flex-shrink-0"
        />
      </button>
      {open && <p className="text-[#3a3a32] text-[15px] leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1c1917] text-center mb-12">
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
