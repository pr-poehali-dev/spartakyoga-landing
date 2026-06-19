import { reachGoal } from "@/lib/metrika";

const TG_LINK = "https://t.me/spartakmihailovich";

export default function PriceSection() {
  return (
    <section id="price" className="py-20 md:py-[80px] bg-[#1c1917]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-white font-light mb-10">
          Цена до конца июля
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="rounded-2xl border border-white/20 p-8 bg-white/5">
            <p className="font-cormorant text-3xl text-white font-light mb-2">
              1 занятие — <span className="whitespace-nowrap">1 000 ₽</span>
            </p>
            <p className="text-white/50 text-sm">Вживую стоит <span className="whitespace-nowrap">5 000 ₽</span></p>
          </div>
          <div className="rounded-2xl border border-[#2d4a1e] p-8 bg-[#2d4a1e]/20">
            <p className="font-cormorant text-3xl text-white font-light mb-2">
              5 занятий — <span className="whitespace-nowrap">5 000 ₽</span>
            </p>
            <p className="text-white/50 text-sm"><span className="whitespace-nowrap">1 000 ₽</span> за занятие — заморозка цены</p>
          </div>
        </div>

        <p className="text-white/60 text-sm mb-6">
          Потом — <span className="whitespace-nowrap">2 000 ₽</span> за занятие. Успевайте по цене запуска.
        </p>

        <div className="rounded-2xl border border-white/10 p-6 bg-white/5 mb-8">
          <p className="text-white/80 text-sm leading-relaxed">
            Если вы готовы оставить честный отзыв после месяца занятий — я закреплю за вами цену <span className="whitespace-nowrap">1 000 ₽</span> ещё на месяц.
          </p>
        </div>

        <a
          href={TG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => reachGoal("click_cta_price")}
          style={{ borderRadius: "100px", padding: "16px 40px", backgroundColor: "#2d4a1e" }}
          className="inline-block text-white text-base font-medium hover:opacity-90 active:scale-95 transition-all duration-200 mb-4"
        >
          Записаться по цене июля
        </a>

        <p className="text-white/40 text-xs mt-4">
          Первое занятие — <span className="whitespace-nowrap">1 000 ₽</span>. Если не понравится — верну деньги.
        </p>
      </div>
    </section>
  );
}