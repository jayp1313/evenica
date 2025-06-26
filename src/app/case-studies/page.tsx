import React from "react";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";
import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Case Studies | E-Commerce Success Stories with Evenica",
  description:
    "Read real-world case studies showcasing how Evenica helped brands achieve digital commerce success through innovative technology and expert implementation.",
};

const CaseStudiesPage = () => {
  return (
    <main>
      <HeroSection
        title="Case Studies"
        subtitle="Explore our successful projects and client success stories"
      />
      <CaseStudyGrid />
    </main>
  );
};

export default CaseStudiesPage;
