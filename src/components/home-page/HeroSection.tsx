"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 md:px-20 min-h-screen content-center mt-5"
      style={{
        backgroundImage: "url('/bg-image.avif')",
        position: "relative",
        overflow: "hidden",
        backgroundAttachment: "fixed",
        backgroundPosition: "unset",
      }}
    >
      <h4 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
        COMMERCE EXISTS WHERE <br /> TRANSACTION MEETS INTERACTION
      </h4>
      <p className="text-xl text-gray-600 max-w-2xl mb-6">
        Innovative commerce experiences start with Evenica. Trust one of the
        longest standing and most experienced commerce solution providers within
        the Microsoft channel to elevate your brand. 2022 Microsoft Partner of
        the Year Finalist for Dynamics 365 Commerce.
      </p>
      <Button asChild>
        <Link href="/about">
          Learn More <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
