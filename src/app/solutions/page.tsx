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
    <main>
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
