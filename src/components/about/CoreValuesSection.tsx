"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { values } from "@/data/core-values";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function CoreValuesSection() {
  return (
    <section className="mb-12 md:mb-18">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <Card key={value.title} className={`p-6 ${value.color} border-0`}>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
