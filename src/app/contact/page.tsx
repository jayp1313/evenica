import ContactForm from "@/components/ContactForm";
import MapLocation from "@/components/MapLocation";
import { HeaderSection } from "@/components/contact/HeaderSection";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-800 py-12 md:py-16 px-4 sm:px-6 lg:px-0 mt-18">
      <HeaderSection />
      <ContactForm />
      <MapLocation />
    </main>
  );
}
