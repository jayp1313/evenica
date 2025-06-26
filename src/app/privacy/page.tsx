import HeroSection from "@/components/HeroSection";
import PrivacyPolicySection from "@/components/privacy/PrivacyPolicySection";
export const metadata = {
  title: "Privacy Policy | Evenica",
  description:
    "Learn how Evenica collects, uses, and protects your personal information. Review our privacy practices and commitment to data security.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <HeroSection
        title="Privacy Policy"
        subtitle="Your privacy is critically important to us."
      />
      <PrivacyPolicySection />
    </main>
  );
}
