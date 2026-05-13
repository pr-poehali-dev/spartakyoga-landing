import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQ_ITEMS = [
  {
    q: "Подойдёт ли мне, если я никогда не занимался?",
    a: "Да. Занятия построены так, чтобы было комфортно и новичкам, и тем, кто занимается давно. Я подстраиваю нагрузку индивидуально.",
  },
  {
    q: "Что брать с собой?",
    a: "Коврик (можно одолжить у меня), удобную одежду, воду. Больше ничего не нужно.",
  },
  {
    q: "Если дождь?",
    a: "Занятие переносится или отменяется. Я предупреждаю за несколько часов в Telegram.",
  },
  {
    q: "Где расписание?",
    a: "Актуальное расписание — в Telegram-боте @spartakyogapark_bot. Там же можно записаться.",
  },
];

export default function FaqFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* FAQ */}
      <section className="py-24 px-5 bg-background">
        <div className="max-w-2xl mx-auto">
          <p className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Вопросы
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-foreground font-light mb-12">
            Часто спрашивают
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-sm text-foreground pr-4">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={`text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest text-white py-12 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-cormorant text-2xl font-light mb-2">SpartakYogaPark</p>
              <p className="text-white/40 text-sm">Йога на свежем воздухе в парках Москвы</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Контакты</p>
              <div className="space-y-2">
                <a
                  href="tel:+79969971527"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Phone" size={14} />
                  +7 996 997 15 27
                </a>
                <a
                  href="mailto:almaznayaspina@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Mail" size={14} />
                  almaznayaspina@gmail.com
                </a>
              </div>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Соцсети</p>
              <div className="space-y-2">
                <a
                  href="https://t.me/SpartakYogaPark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Send" size={14} />
                  Telegram-канал
                </a>
                <a
                  href="https://max.ru/join/-5rZSTR_Yu0HQJAsQgOwVJAo-hZlt1rS7_Fu8UsOmnc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="MessageCircle" size={14} />
                  Max
                </a>
                <a
                  href="https://t.me/spartakyogapark_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="Bot" size={14} />
                  @spartakyogapark_bot
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/25 text-xs text-center">© 2024 SpartakYogaPark · Москва</p>
          </div>
        </div>
      </footer>
    </>
  );
}
