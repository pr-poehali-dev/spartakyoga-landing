import { scrollToForm } from "@/components/event/scrollToForm";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#f7f5f2] pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h1 className="font-cormorant text-[clamp(34px,6.5vw,64px)] font-semibold text-[#1a1a1a] leading-[1.08] mb-8">
          Хотите, чтобы гости запомнили ваше мероприятие? Привозим йогу с командой
          тренеров.
        </h1>
        <p className="text-[#1a1a1a]/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto whitespace-pre-line">
          {`Я веду практику. Двое ассистентов-тренеров ходят по рядам и мягко поправляют каждого.
Даже новичок чувствует себя уверенно — его не бросают одного.
60 минут. Гости уходят с лёгким телом и ясной головой.
Без усталости и без «я не смогу».`}
        </p>
        <button
          onClick={() => scrollToForm()}
          className="rounded-full bg-[#2d4a1e] text-white text-base md:text-lg font-medium px-10 py-4 hover:bg-[#24401a] active:scale-[0.98] transition-colors"
        >
          Получить предложение
        </button>
        <p className="text-[#1a1a1a]/55 text-sm mt-5">
          Или напишите на почту:{" "}
          <a
            href="mailto:almaznayaspina@gmail.com"
            className="text-[#2d4a1e] hover:underline"
          >
            almaznayaspina@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
