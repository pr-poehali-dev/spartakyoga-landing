import Reveal from "@/components/event/Reveal";

const PROJECTS = [
  {
    img: "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/11b9edce-91d2-4576-9b6e-04c627ec3c2a.jpg",
    title: "Фестиваль Дикая Мята",
    subtitle: "100+ человек",
  },
  {
    img: "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/c9b0dafc-6f7a-4359-b08a-4847b2205491.jpg",
    title: "Корпоратив в офисе",
    subtitle: "50+ сотрудников",
  },
  {
    img: "https://cdn.poehali.dev/projects/0b3da737-ea78-41e6-98b6-5614750b2c31/files/77820eb4-fec6-45c7-87ac-ded87fdd8cec.jpg",
    title: "Частное мероприятие",
    subtitle: "30 гостей",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <h2 className="font-cormorant text-[clamp(30px,5vw,48px)] font-semibold text-[#1c1917] text-center mb-12 max-w-2xl mx-auto leading-tight">
            Проводили йогу на фестивалях и корпоративах
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1c1917]">
                    {p.title}
                  </h3>
                  <p className="text-[#8a8a7a] text-sm mt-1">{p.subtitle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
