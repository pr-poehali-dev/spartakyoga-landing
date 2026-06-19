import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQ = [
  {
    q: "Что если у меня ничего не получается?",
    a: "Я подстраиваю программу под ваш уровень. Никаких сложных асан в первый раз — только то, что комфортно.",
  },
  {
    q: "Можно ли заниматься, если болит спина?",
    a: "Да. Йога помогает снять боль. Я адаптирую программу под ваше состояние.",
  },
  {
    q: "Почему так дёшево?",
    a: "Я только вышел в онлайн. Первым ученикам — цена 1 000 ₽. Потом вырастет до 2 000 ₽.",
  },
  {
    q: "Что нужно для занятия?",
    a: "Коврик, удобная одежда, камера, 1 метр свободного пространства.",
  },
  {
    q: "Как оплатить?",
    a: "После тренировки, на карту. Первое занятие — 1 000 ₽. Если не понравится — верну деньги.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e7e5e4]">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#1c1917] text-base font-medium">{q}</span>
        <Icon
          name={open ? "ChevronUp" : "ChevronDown"}
          size={18}
          className="text-[#78716c] flex-shrink-0"
        />
      </button>
      {open && (
        <p className="text-[#78716c] text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  );
}

export default function FaqFooter() {
  return (
    <>
      {/* FAQ */}
      <section id="faq" className="py-20 md:py-[80px] bg-[#fafaf9]">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-[#1c1917] font-light mb-8">
            Частые вопросы
          </h2>
          <div>
            {FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1c1917] py-12">
        <div className="max-w-5xl mx-auto px-5">
          <p className="font-cormorant text-2xl text-white font-light mb-6">Спартак Захаров</p>
          <div className="flex flex-col gap-3 text-[#78716c] text-sm">
            <a href="tel:+79969971527" className="hover:text-white transition-colors">
              +7 996 997 15 27
            </a>
            <a
              href="https://t.me/spartakmihailovich"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Telegram: @spartakmihailovich
            </a>
            <a
              href="https://www.instagram.com/yogaspartak/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Подписывайтесь в Instagram — там видео, упражнения и анонсы
            </a>
            <a
              href="mailto:almaznayaspina@gmail.com"
              className="hover:text-white transition-colors"
            >
              almaznayaspina@gmail.com
            </a>
            <a
              href="https://max.ru/join/-5rZSTR_Yu0HQJAsQgOwVJAo-hZlt1rS7_Fu8UsOmnc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Max
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
