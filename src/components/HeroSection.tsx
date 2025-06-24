"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import React from "react";

export default function HeroSection(props: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="text-center mb-18">
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {props.title}
        </h1>
        <p className="text-lg text-gray-600">{props.subtitle}</p>
      </MaxWidthWrapper>
    </section>
  );
}
