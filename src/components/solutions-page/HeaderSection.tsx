import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import React from "react";

export const HeaderSection = () => {
  return (
    <section className="text-center mb-12">
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          E-Commerce Solutions
        </h1>
      </MaxWidthWrapper>
    </section>
  );
};
