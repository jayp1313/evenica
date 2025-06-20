"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import React from "react";

export default function AboutHero() {
  return (
    <section className="text-center mb-12">
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Evenica
        </h1>
        <p className="text-lg text-gray-600">
          Empowering brands with sophisticated digital commerce experiences.
        </p>
      </MaxWidthWrapper>
    </section>
  );
}
