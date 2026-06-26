import Reveal from "@/components/event/Reveal";
import Icon from "@/components/ui/icon";

export default function Gift() {
  return (
    <section className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1c1917] text-center mb-10">
            Бонус для организатора
          </h2>
        </Reveal>
        <Reveal>
          <div className="rounded-3xl bg-[#2d4a1e] text-white p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Gift" size={36} className="text-white" />
            </div>
            <p className="text-lg leading-relaxed text-white/90">
              При согласовании мероприятия дарим банку алтайского мёда. Настоящий, с
              пасеки в предгорьях Алтая. Лично вам, не команде :-)
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
