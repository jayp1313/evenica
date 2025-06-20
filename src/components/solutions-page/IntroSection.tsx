import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

export const IntroSection = () => {
  return (
    <section className="mb-16 md:mb-20">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Innovative Digital Commerce Experiences
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-base md:text-lg">
                With decades of e-commerce mastery under our belt, Evenica is
                the premiere Microsoft Gold Partner to lead your e-commerce
                implementation and evolution. Our proven methodology ensures a
                rapid turnaround and adaptable e-commerce strategy that grows
                with your needs.
              </p>
              <p className="text-base md:text-lg">
                We demonstrate an authentic level of care for our customers and
                their success. We value long-term partnerships, where we can
                become integrated members of our customers&apos; teams to
                maximize results and benefits. Evenica encourages smart
                independence and permits freedom of creativity and exploration
                from our staff, which leads to high value innovation.
              </p>
            </div>
          </div>
          <div className="lg:flex-1">
            <Image
              src="/Evenica_Solutions.png"
              alt="Evenica Solutions"
              width={600}
              height={600}
              className="rounded-lg shadow-md object-cover"
              priority
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
