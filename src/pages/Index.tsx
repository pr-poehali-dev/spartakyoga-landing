import HeroSection from "@/components/landing/HeroSection";
import WhyCheapSection from "@/components/landing/WhyCheapSection";
import ForWhomSection from "@/components/landing/ForWhomSection";
import WhyTrainerSection from "@/components/landing/WhyTrainerSection";
import TrainerSection from "@/components/landing/TrainerSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PriceSection from "@/components/landing/PriceSection";
import HowToStartSection from "@/components/landing/HowToStartSection";
import FaqFooter from "@/components/landing/FaqFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#fafaf9] font-golos">
      <HeroSection />
      <WhyCheapSection />
      <ForWhomSection />
      <WhyTrainerSection />
      <TrainerSection />
      <HowItWorksSection />
      <PriceSection />
      <HowToStartSection />
      <FaqFooter />
    </div>
  );
}
