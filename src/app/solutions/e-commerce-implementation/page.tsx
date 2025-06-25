import HeroSection from "@/components/HeroSection";
import { IntroSection } from "@/components/solutions-page/IntroSection";
import ValuesCard from "@/components/solutions-page/e-commerce-implementation/ValuesCard";
import D365Commerce from "@/components/solutions-page/e-commerce-implementation/D365Commerce";
import ECommerceCTA from "@/components/solutions-page/e-commerce-implementation/ECommerceCTA";

export default function ECommerceImplementationPage() {
  return (
    <main className="bg-white text-gray-800 ">
      <HeroSection
        title="E-Commerce Implementation"
        subtitle="Accelerating Your Digital Commerce Success Through Proven Expertise"
      />
      <IntroSection />
      <ValuesCard />
      <D365Commerce />
      <ECommerceCTA />
    </main>
  );
}
