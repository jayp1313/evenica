import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import React from "react";

export const HeaderSection = () => {
  return (
    <section className="text-center mb-18">
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in touch
        </h1>
        <p className="text-lg text-gray-600">
          Let’s build something remarkable together.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};
