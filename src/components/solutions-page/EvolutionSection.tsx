import Image from "next/image";
import React from "react";
import { PhasesAccordion } from "./PhasesAccordion";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const EvolutionSection = () => {
  return (
    <section className="space-y-10">
      <MaxWidthWrapper>
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              The Evolution of E-commerce
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="overflow-hidden">
            <Image
              src="/4-Phases.png"
              alt="4 Phases of E-commerce Evolution"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="text-center text-gray-600">
            <p className="text-base md:text-lg">
              Evenica recognizes that your brand will evolve through many
              e-commerce phases. Increasing consumer expectations for rewarding
              experiences within the increasingly sophisticated technology
              landscape requires a tenured e-commerce partner that can go far
              beyond the point and click deployment. Through each phase of your
              e-commerce evolution, Evenica is able to inspire, lead and
              implement solutions – we become your trusted e-commerce partner
              that is equally vested in your long-term success as you are.
            </p>
          </div>
          <PhasesAccordion />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
