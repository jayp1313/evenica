"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const PartnerOfTheYear = () => (
  <section className="bg-[#0D0D3C] my-12">
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <Image
            src="/Finalist-Logo-1280x536.png"
            alt="Partner of the Year"
            width={400}
            height={200}
          />
        </div>
        <div>
          <Badge className="mb-4 bg-purple-100 text-purple-800">
            Award Recognition
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Partner of the Year Finalist
          </h2>
          <p className="text-gray-200 text-lg">
            Evenica was honored as a finalist for the 2022 Microsoft Partner of
            the Year Award in Dynamics 365 Commerce, recognizing our innovative
            customer solutions.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
);
