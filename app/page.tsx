import Accordion from "@/components/Accordion";
import AccordionSection from "@/components/views/AccordionSection";
import ComingSoon from "@/components/views/ComingSoon";
import CreonSection from "@/components/views/CreonSection";
import Hero from "@/components/views/Hero";
import ProfitingSection from "@/components/views/ProfitingSection";
import RecCardSection from "@/components/views/RecCardSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <div className="order-5 xl:order-2">
        <CreonSection />
      </div>
      <div className="order-3">
        <ProfitingSection />
      </div>
      <div className="order-2 xl:order-4">
        <AccordionSection />
      </div>
      <div className=" order-6 xl:order-5">
        <ComingSoon />
      </div>
      <div className="order-4 xl:order-4">
        <RecCardSection />
      </div>
    </main>
  );
}
