import Hero from "@/components/event/Hero";
import Advantages from "@/components/event/Advantages";
import Cases from "@/components/event/Cases";
import Formats from "@/components/event/Formats";
import Organizers from "@/components/event/Organizers";
import Gift from "@/components/event/Gift";
import Faq from "@/components/event/Faq";
import LeadForm from "@/components/event/LeadForm";
import Footer from "@/components/event/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] font-golos">
      <Hero />
      <Advantages />
      <Cases />
      <Formats />
      <Organizers />
      <Gift />
      <Faq />
      <LeadForm />
      <Footer />
    </div>
  );
}