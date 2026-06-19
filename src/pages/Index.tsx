import HeroSection from "@/components/landing/HeroSection";
import TrainerSection from "@/components/landing/TrainerSection";
import ForWhomSection from "@/components/landing/ForWhomSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PriceSection from "@/components/landing/PriceSection";
import HowToStartSection from "@/components/landing/HowToStartSection";
import FaqFooter from "@/components/landing/FaqFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#fafaf9] font-golos">
      <HeroSection />
      <TrainerSection />
      <ForWhomSection />
      <HowItWorksSection />
      <PriceSection />
      <HowToStartSection />
      <FaqFooter />
    </div>
  );
}
