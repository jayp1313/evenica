"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function MissionCultureSection() {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Culture
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 md:p-10 bg-gradient-to-br from-blue-50 to-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver innovative digital commerce solutions that transform
              businesses and create exceptional customer experiences through
              technical excellence and creative problem-solving.
            </p>
          </Card>
          <Card className="p-8 md:p-10 bg-gradient-to-br from-purple-50 to-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Culture
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We foster creativity, independence, and collaboration. Our team of
              forward-thinkers actively seeks creative solutions while
              maintaining a customer-first approach that values long-term
              partnerships.
            </p>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
