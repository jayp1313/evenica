"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { services } from "@/data/servicess";

export default function ServicesSection() {
  return (
    <section className="py-16">
      <MaxWidthWrapper>
        <div className="text-center px-4">
          <p className="text-purple-600 text-sm font-semibold tracking-wide uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Taking Your Business to the Next Level
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-16 h-16">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-purple-500 rounded-full"></div>
                  <div className="absolute top-2 left-4 w-8 h-8 bg-purple-300 rounded-full"></div>
                </div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-md text-gray-600 max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
