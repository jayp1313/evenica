import { CultureSection } from "@/components/careers/CultureSection";
import { BenefitsSection } from "@/components/careers/BenefitsSection";
import { JobOpenings } from "@/components/careers/JobOpenings";
import { CareerCTA } from "@/components/careers/CareerCTA";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  title: "Careers at Evenica | Join Our Team",
  description:
    "Discover exciting career opportunities at Evenica. Join our team of passionate professionals and help shape the future of e-commerce solutions.",
};

export default function CareersPage() {
  return (
    <main>
      <HeroSection
        title=" Life At Evenica"
        subtitle=" We're always interested in people who are ambitious, dedicated
          and love what they do."
      />
      <CultureSection />
      <BenefitsSection />
      <JobOpenings />
      <CareerCTA />
    </main>
  );
}
