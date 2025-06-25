"use client";

import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function StatsSection() {
  return (
    <section className="bg-[#0D0D3C] text-white my-12">
      <MaxWidthWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            We&apos;re Good with Numbers
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "60+", label: "Qualified Experts" },
              { value: "120", label: "Clients Every Year" },
              { value: "10+", label: "Intl. Partners" },
            ].map((stat, index) => (
              <>
                {index > 0 && (
                  <div key={index} className="hidden md:block text-3xl">
                    ·
                  </div>
                )}
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-5xl font-extrabold">{stat.value}</span>
                  <span className="mt-2 text-sm">{stat.label}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
