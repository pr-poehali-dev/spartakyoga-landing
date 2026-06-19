import LeadForm from "@/components/landing/LeadForm";
import { reachGoal } from "@/lib/metrika";

const TG_LINK = "https://t.me/spartakmihailovich";

export default function PriceSection() {
  return (
    <section id="price" className="py-20 bg-[#1c1917]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-white font-light mb-10 text-center">
          Цена до конца июля
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="rounded-2xl border border-[#2d4a1e] p-8 bg-[#2d4a1e]/20 text-center">
            <p className="font-cormorant text-3xl text-white font-light mb-2">
              До конца июля — <span className="whitespace-nowrap">1 000 ₽</span> за тренировку
            </p>
            <p className="text-white/50 text-sm">Запишитесь сейчас — место занимаю под вас лично</p>
          </div>
          <div className="rounded-2xl border border-white/20 p-8 bg-white/5 text-center">
            <p className="font-cormorant text-3xl text-white font-light mb-2">
              С 1 августа — <span className="whitespace-nowrap">2 000 ₽</span> за тренировку
            </p>
            <p className="text-white/50 text-sm">Успевайте по цене запуска</p>
          </div>
        </div>

        <p className="text-white/40 text-xs text-center mb-10">
          Первое занятие — <span className="whitespace-nowrap">1 000 ₽</span>. Если не понравится — верну деньги.
        </p>

        <LeadForm source="spartak.space / price" goal="lead_price" dark />

        <div className="text-center mt-6">
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal("click_cta_price")}
            className="text-white/40 text-xs hover:text-white/70 transition-colors underline underline-offset-4"
          >
            или написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
