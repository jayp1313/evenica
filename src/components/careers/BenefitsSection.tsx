"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { careerData } from "@/data/careersData";

export const BenefitsSection = () => {
  return (
    <section className="mb-18">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {careerData.benefits.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {careerData.benefits.items.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="text-center p-4">
                <div className="mx-auto mb-3 flex items-center justify-center w-18 h-18 rounded-lg bg-blue-50 text-purple-600">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-medium mb-1">{benefit.title}</h3>
                <p className="text-md text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
