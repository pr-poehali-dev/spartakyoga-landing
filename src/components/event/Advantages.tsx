import Reveal from "@/components/event/Reveal";
import Icon from "@/components/ui/icon";

const ITEMS = [
  {
    icon: "User",
    title: "Я веду лично",
    text: "Спартак Захаров, 10+ лет практики. Веду фестиваль Дикая Мята, корпоративы, частные ивенты. Без воды и эзотерики — только тело, дыхание, тишина.",
  },
  {
    icon: "Users",
    title: "Ассистенты поправляют каждого",
    text: "Наши девушки ходят между рядами и мягко поправляют каждого участника. Группа получает внимание — даже новичок чувствует себя уверенно.",
  },
  {
    icon: "Sparkles",
    title: "Любой уровень без подготовки",
    text: "Программа адаптируется под аудиторию. От офисных менеджеров до топ-менеджеров — всем комфортно.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1c1917] text-center mb-12">
            Почему выбирают нас
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="h-full rounded-2xl bg-[#f7f5f2] border border-black/5 p-8">
                <div className="w-12 h-12 rounded-full bg-[#2d4a1e]/10 flex items-center justify-center mb-5">
                  <Icon name={item.icon} size={22} className="text-[#2d4a1e]" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[#1c1917] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#3a3a32] text-[15px] leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
