"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";

export const ProgramParticipation = () => (
  <section className="text-center">
    <MaxWidthWrapper>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Program Participation
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        <Badge className="px-4 py-2 bg-blue-50 text-blue-800 text-sm font-medium">
          ISV Connect
        </Badge>
        <Badge className="px-4 py-2 bg-purple-50 text-purple-800 text-sm font-medium">
          Catalyst Certified
        </Badge>
        <Badge className="px-4 py-2 bg-green-50 text-green-800 text-sm font-medium">
          MACC Transactable
        </Badge>
      </div>
    </MaxWidthWrapper>
  </section>
);
