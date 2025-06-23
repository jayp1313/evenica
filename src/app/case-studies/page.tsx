import React from "react";
import { CaseStudyHeader } from "@/components/case-studies/CaseStudyHeader";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";

const CaseStudiesPage = () => {
  return (
    <main className="bg-white text-gray-800 py-12 md:py-16 px-4 sm:px-6 lg:px-0 mt-18">
      <CaseStudyHeader />
      <CaseStudyGrid />
    </main>
  );
};

export default CaseStudiesPage;
