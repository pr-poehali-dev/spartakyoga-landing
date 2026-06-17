import { reachGoal } from "@/lib/metrika";

const TG_LINK = "https://t.me/spartakmihailovich";

const STEPS = [
  {
    num: "01",
    text: "Напишите в Telegram «Хочу на пробную»",
  },
  {
    num: "02",
    text: "Я отвечу в течение часа — договоримся о времени",
  },
  {
    num: "03",
    text: "Включаете камеру и занимаетесь",
  },
];

export default function HowToStartSection() {
  return (
    <section id="how-to-start" className="py-20 md:py-[80px] bg-[#f5f4f2]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-[#1c1917] font-light mb-10">
          Как начать
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-3">
              <span className="font-cormorant text-5xl text-[#2d4a1e] font-light leading-none">
                {step.num}
              </span>
              <p className="text-[#1c1917] text-base leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <a
          href={TG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => reachGoal("click_cta_start")}
          style={{ borderRadius: "100px", padding: "16px 40px", backgroundColor: "#2d4a1e" }}
          className="inline-block text-white text-base font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
        >
          Записаться на тренировку
        </a>
      </div>
    </section>
  );
}
