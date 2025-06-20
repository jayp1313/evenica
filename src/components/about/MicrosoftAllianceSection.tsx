"use client";

import Image from "next/image";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function MicrosoftAllianceSection() {
  return (
    <section className="max-w-8xl bg-[#0D0D3C] text-white py-16">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Microsoft Alliance
            </h2>
            <p className="text-gray-200 text-lg">
              Through an uncompromising commitment to our customers’ success,
              Evenica is widely recognized as one of the most experienced
              e-commerce partners within the Microsoft channel. Evenica
              approaches partnerships with an end goal of providing exceptional
              customer experiences and driving mutual growth.
            </p>
            <p className="text-gray-200 text-lg">
              We utilize each other’s strong technical capabilities to
              complement our individual strengths. We believe that long-term
              alignment with our partners is the engine to innovation and
              growth.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/Solutions-Partner-Long.png"
              alt="Microsoft Alliance"
              width={500}
              height={400}
              className="object-cover w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
