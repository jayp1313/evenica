import { IntroSection } from "@/components/solutions-page/IntroSection";
import { SolutionsGrid } from "@/components/solutions-page/SolutionsGrid";
import { EvolutionSection } from "@/components/solutions-page/EvolutionSection";
import { IndustriesTabs } from "@/components/solutions-page/IndustriesTabs";
import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Evenica",
  description:
    "Explore Evenica’s tailored e-commerce solutions, from scalable platforms to personalized customer experiences, automation, and seamless integrations.",
};

export default function SolutionsPage() {
  return (
    <main className="bg-white text-gray-800 py-12 md:py-16 space-y-3">
      <HeroSection
        title="E-Commerce Solutions"
        subtitle="Transforming your e-commerce vision into reality with proven
          solutions."
      />
      <IntroSection />
      <SolutionsGrid />
      <EvolutionSection />
      <IndustriesTabs />
    </main>
  );
}
