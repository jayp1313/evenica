"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

export const IntroSection = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex md:flex-row items-center gap-10 flex-col-reverse">
          <div className="lg:flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Innovative Digital Commerce Experiences
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-600">
              <p>
                With decades of e-commerce expertise, Evenica is the premier
                Microsoft Gold Partner for delivering rapid, adaptable digital
                commerce solutions that grow with your business.
              </p>
              <p>
                We value long-term partnerships, working as an extension of our
                customers’ teams to maximize success. Our culture of smart
                independence fosters creativity and high-value innovation.
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
