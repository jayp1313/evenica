import ContactForm from "@/components/contact/ContactForm";
import MapLocation from "@/components/contact/MapLocation";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Contact Us | Evenica",
  description:
    "Get in touch with Evenica. Reach out to our team for sales inquiries, partnership opportunities, or technical support. We’re here to help with your e-commerce needs.",
};

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Get in touch"
        subtitle="Let’s build something remarkable together."
      />
      <ContactForm />
      <ContactInfoSection />
      <MapLocation />
    </main>
  );
}
