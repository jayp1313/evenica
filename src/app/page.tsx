"use client";

import HeroSection from "@/components/home-page/HeroSection";
import ServicesSection from "@/components/home-page/ServicesSection";
import StatsSection from "@/components/home-page/StatsSection";
import ClientsCarousel from "@/components/ClientsCarousel";
import MapLocation from "@/components/MapLocation";
import ContactForm from "@/components/ContactForm";
import CommerceSolutions from "@/components/home-page/CommerceSolutions";
import AwardsSection from "@/components/AwardSelection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col">
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
