"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import Image from "next/image";

export const MicrosoftPartnership = () => (
  <section>
    <MaxWidthWrapper>
      <div className="flex md:flex-row items-center gap-10 flex-col-reverse">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Microsoft Partnership
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Through an uncompromising commitment to our customers&apos;
              success, Evenica is recognized as one of the most experienced
              e-commerce partners in the Microsoft ecosystem.
            </p>
            <p>
              We approach partnerships with an end goal of providing exceptional
              customer experiences and driving mutual growth through technical
              collaboration.
            </p>
            <p>
              Long-term alignment with our partners fuels innovation and
              sustainable growth.
            </p>
          </div>
        </div>

        <Image
          src="/Evenica_Microsoft-Toronto-HQ.jpg"
          alt="Microsoft Partnership"
          width={500}
          height={500}
        />
      </div>
    </MaxWidthWrapper>
  </section>
);
