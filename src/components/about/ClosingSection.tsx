"use client";
import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function ClosingSection() {
  return (
    <section className="mt-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="p-6 bg-white rounded-full shadow-lg">
            <Image
              src="/Evenica-Logo.png"
              alt="Evenica Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <p className="text-lg text-gray-600 font-medium text-center max-w-md">
            Building the future of digital commerce experiences
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
