import LeadForm from "@/components/landing/LeadForm";

const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/bucket/a3034fdc-a320-4fa1-82ed-905d32f07492.jpg";

export default function TrainerSection() {
  return (
    <section id="trainer" className="py-20 bg-[#f5f4f2]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 md:items-start">
          {/* Фото */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img
              src={PORTRAIT_URL}
              alt="Спартак Михайлович"
              className="w-full max-w-[280px] aspect-[3/4] rounded-2xl object-cover border border-[#e7e5e4]"
            />
          </div>

          {/* Текст */}
          <div className="max-w-xl">
            <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-[#1c1917] font-light mb-5 text-center md:text-left">
              Преподаю йогу более 10 лет
            </h2>
            <div className="text-[#78716c] text-base leading-[1.8] space-y-4 mb-8">
              <p>Веду практики на крупных фестивалях: Дикая Мята, Равновесие, Сказка, Систо, Чилаут Пленет, Сан Спирит. Работаю с любым уровнем — от новичков до профи.</p>
              <p>Вживую мои тренировки стоят от <span className="whitespace-nowrap">5 000 ₽</span>. Сейчас выхожу в онлайн — для меня это новый формат. У меня пока нет отзывов в онлайне — и я не хочу притворяться. Поэтому первым ученикам особая цена: <span className="whitespace-nowrap">1 000 ₽</span> за тренировку до конца июля. В августе — <span className="whitespace-nowrap">2 000 ₽</span>.</p>
              <p>Если готовы оставить честный отзыв после месяца занятий — закреплю цену <span className="whitespace-nowrap">1 000 ₽</span> ещё на месяц.</p>
            </div>
            <LeadForm source="spartak.space / trainer" goal="lead_trainer" />
          </div>
        </div>
      </div>
    </section>
  );
}