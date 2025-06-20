import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionCultureSection from "@/components/about/MissionCultureSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import MicrosoftAllianceSection from "@/components/about/MicrosoftAllianceSection";
import ClientsCarousel from "@/components/ClientsCarousel";
import AwardsSection from "@/components/AwardSelection";
import ClosingSection from "@/components/about/ClosingSection";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-gray-800 py-12 md:py-16 px-4 sm:px-6 lg:px-0 mt-18">
      <AboutHero />
      <StorySection />
      <MissionCultureSection />
      <CoreValuesSection />
      <ClientsCarousel />
      <MicrosoftAllianceSection />
      <AwardsSection />
      <ClosingSection />
    </main>
  );
}
