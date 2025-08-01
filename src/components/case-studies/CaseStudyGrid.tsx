"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export const CaseStudyGrid = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
