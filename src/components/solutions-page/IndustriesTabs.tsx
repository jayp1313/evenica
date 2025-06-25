"use client";
import * as React from "react";
import Image from "next/image";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { industries } from "@/data/industries";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export function IndustriesTabs() {
  const defaultValue = industries[0]?.id || "";

  return (
    <section className="!pt-5 -mt-2" id="industries">
      <div className="my-12">
        <h2 className="text-center text-3xl font-semibold bg-[#0D0D3C] text-white py-6 px-4">
          INDUSTRIES WE SERVE
        </h2>
      </div>
      <MaxWidthWrapper>
        <div>
          <Tabs defaultValue={defaultValue} className="w-full">
            <TabsList className="overflow-x-auto no-scrollbar min-w-full">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="whitespace-nowrap px-4 py-2 text-sm md:text-base"
                >
                  {industry.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent
                key={industry.id}
                value={industry.id}
                className="mt-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold">{industry.title}</h3>
                    <p className="text-lg text-gray-700">
                      {industry.description}
                    </p>
                  </div>

                  {industry.imageSrc && (
                    <div className="flex-1 flex justify-center">
                      <div className="w-full max-w-sm rounded-lg overflow-hidden shadow">
                        <Image
                          src={industry.imageSrc}
                          alt={`${industry.title} illustration`}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="my-18">
                  <h3 className="text-2xl font-bold text-center my-12">
                    Commerce for {industry.title} Priorities
                  </h3>
                  {industry.prioritiesImage && (
                    <div className="w-full rounded-lg overflow-hidden">
                      <Image
                        src={industry.prioritiesImage}
                        alt={`${industry.title} priorities`}
                        width={1000}
                        height={1000}
                        className="w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="text-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Commerce Solutions for All Industries
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p>
            Evenica offers innovative Commerce solutions for each major
            industry, with vertical-specific functionality to extend the
            capabilities of Microsoft’s Dynamics 365 Commerce or work seamlessly
            with Evenica’s e4Commerce. Select an industry above to access
            videos, resources and case studies.
          </p>
          <br />
          <p>
            With 20 years of e-commerce technology experience, Evenica is the
            longest standing Commerce partner within the Microsoft channel.
            Named 2022 Microsoft Partner of Year runner-up in the category of
            Dynamics 356 Commerce. Evenica is highly regarded for our
            Partner-to-Partner strategy and our ability to compliment a brand’s
            existing technology partners to bring an omnichannel approach to a
            new e-commerce solution.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
