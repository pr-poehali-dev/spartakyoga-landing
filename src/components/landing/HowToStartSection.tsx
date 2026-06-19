import LeadForm from "@/components/landing/LeadForm";

const STEPS = [
  { num: "01", text: "Оставьте номер телефона — я свяжусь в течение часа" },
  { num: "02", text: "Договоримся о времени, удобном для вас" },
  { num: "03", text: "Включаете камеру и занимаетесь" },
];

export default function HowToStartSection() {
  return (
    <section id="how-to-start" className="py-20 bg-[#f5f4f2]">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] text-[#1c1917] font-light mb-10 text-center">
          Как начать
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-3 text-center">
              <span className="font-cormorant text-5xl text-[#2d4a1e] font-light leading-none">
                {step.num}
              </span>
              <p className="text-[#1c1917] text-base leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <LeadForm source="spartak.space / how-to-start" goal="lead_start" />
      </div>
    </section>
  );
}
