import HeroSection from "@/components/home-page/HeroSection";
import ServicesSection from "@/components/home-page/ServicesSection";
import StatsSection from "@/components/home-page/StatsSection";
import ClientsCarousel from "@/components/about/ClientsCarousel";
import MapLocation from "@/components/contact/MapLocation";
import ContactForm from "@/components/contact/ContactForm";
import CommerceSolutions from "@/components/home-page/CommerceSolutions";
import AwardsSection from "@/components/about/AwardSelection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evenica | E-Commerce Solutions & Microsoft D365 Experts",
  description:
    "Evenica is a leading provider of enterprise-grade e-commerce solutions. We help brands deliver sophisticated digital commerce experiences with Microsoft Dynamics 365 Commerce and our proprietary platforms.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AwardsSection />
      <ClientsCarousel />
      <CommerceSolutions />
      <ContactForm />
      <MapLocation />
    </main>
  );
}
