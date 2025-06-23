import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import React from "react";

export const HeaderSection = () => {
  return (
    <section className="text-center mb-18">
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          E-Commerce Solutions
        </h1>
        <p className="text-lg text-gray-600">
          Transforming your e-commerce vision into reality with proven
          solutions.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};
