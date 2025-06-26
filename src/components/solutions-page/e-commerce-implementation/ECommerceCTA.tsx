import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ECommerceCTA() {
  return (
    <section className="bg-[#0D0D3C] text-white py-16 text-center my-12">
      <MaxWidthWrapper>
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-bold text-white mb-3">
            Innovative Experiences Start With Evenica
          </h2>
          <p className="opacity-90">
            Evenica supports brands by providing the most demanding and
            sophisticated digital experiences through e-commerce solutions.
          </p>
          <Button variant="outline">
            <Link href="/contact">Get started</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
