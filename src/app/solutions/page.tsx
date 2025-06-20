"use client";

import { HeaderSection } from "@/components/solutions-page/HeaderSection";
import { IntroSection } from "@/components/solutions-page/IntroSection";
import { SolutionsGrid } from "@/components/solutions-page/SolutionsGrid";
import { EvolutionSection } from "@/components/solutions-page/EvolutionSection";
import { IndustriesTabs } from "@/components/solutions-page/IndustriesTabs";

export default function SolutionsPage() {
  return (
    <main className="bg-white text-gray-800 py-12 md:py-16 px-4 sm:px-6 lg:px-0 mt-18">
      <HeaderSection />
      <IntroSection />
      <SolutionsGrid />
      <EvolutionSection />
      <IndustriesTabs />
    </main>
  );
}
