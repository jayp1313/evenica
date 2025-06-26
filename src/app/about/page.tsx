import StorySection from "@/components/about/StorySection";
import MissionCultureSection from "@/components/about/MissionCultureSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import MicrosoftAllianceSection from "@/components/about/MicrosoftAllianceSection";
import ClientsCarousel from "@/components/about/ClientsCarousel";
import AwardsSection from "@/components/about/AwardSelection";
import ClosingSection from "@/components/about/ClosingSection";
import CallToAction from "@/components/about/ContactUs";
import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "About Evenica | Our Story, Mission & Microsoft Partnership",
  description:
    "Learn about Evenica’s mission, values, and leadership. Discover how we became one of the most experienced Microsoft e-commerce partners.",
};

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection
        title="About Evenica"
        subtitle="Empowering brands with sophisticated digital commerce experiences."
      />
      <StorySection />
      <MissionCultureSection />
      <CoreValuesSection />
      <ClientsCarousel />
      <MicrosoftAllianceSection />
      <AwardsSection />
      <CallToAction />
      <ClosingSection />
    </main>
  );
}
