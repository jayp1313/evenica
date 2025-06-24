import HeroSection from "@/components/home-page/HeroSection";
import ServicesSection from "@/components/home-page/ServicesSection";
import StatsSection from "@/components/home-page/StatsSection";
import ClientsCarousel from "@/components/about/ClientsCarousel";
import MapLocation from "@/components/contact/MapLocation";
import ContactForm from "@/components/contact/ContactForm";
import CommerceSolutions from "@/components/home-page/CommerceSolutions";
import AwardsSection from "@/components/about/AwardSelection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col pb-12 md:pb-16">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <AwardsSection />
        <ClientsCarousel />
        <CommerceSolutions />
        <ContactForm />
        <MapLocation />
      </main>
    </div>
  );
}
