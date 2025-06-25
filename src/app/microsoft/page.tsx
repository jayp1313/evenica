import HeroSection from "@/components/HeroSection";
import { Capabilities } from "@/components/microsoft/Capabilities";
import { MicrosoftPartnership } from "@/components/microsoft/MicrosoftPartnership";
import { PartnerOfTheYear } from "@/components/microsoft/PartnerOfTheYear";
import { ProgramParticipation } from "@/components/microsoft/ProgramParticipation";
import { SuccessAndQuote } from "@/components/microsoft/SuccessAndQuote";

export default function HomePage() {
  return (
    <main>
      <HeroSection
        title="Microsoft Alliance"
        subtitle="Evenica is a trusted, top-tier e-commerce partner in the Microsoft channel, driven by our commitment to customer success."
      />
      <MicrosoftPartnership />
      <PartnerOfTheYear />
      <Capabilities />
      <ProgramParticipation />
      <SuccessAndQuote />
    </main>
  );
}
