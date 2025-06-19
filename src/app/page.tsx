"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ClientsCarousel from "@/components/ClientsCarousel";
import MapLocation from "@/components/MapLocation";
import ContactForm from "@/components/ContactForm";
import CommerceSolutions from "@/components/CommerceSolutions";
import AwardsSection from "@/components/AwardSelection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
