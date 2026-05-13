import HeroSection from "@/components/landing/HeroSection";
import InfoSections from "@/components/landing/InfoSections";
import FormSection from "@/components/landing/FormSection";
import FaqFooter from "@/components/landing/FaqFooter";

export default function Index() {
  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-golos">
      <HeroSection scrollToForm={scrollToForm} />
      <InfoSections scrollToForm={scrollToForm} />
      <FormSection />
      <FaqFooter />
    </div>
  );
}
