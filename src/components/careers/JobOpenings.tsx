"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { careerData } from "@/data/careersData";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const JobOpenings = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {careerData.jobs.title}
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto" />
        </div>

        <div className="space-y-3">
          {careerData.jobs.openings.map((job, index) => (
            <div
              key={index}
              className="p-5 border rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>
                  </div>
                </div>
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
