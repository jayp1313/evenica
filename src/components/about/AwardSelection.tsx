"use client";
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
export default function AwardsSection() {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/Finalist-Logo-1280x536.png"
              alt="Partner of the Year"
              width={300}
              height={300}
              className="flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Partner of the Year Finalist
              </h2>
              <p className="text-gray-700 text-md md:text-base">
                Evenica is honoured to be named a finalist for the Dynamics 365
                Commerce 2022 Microsoft Partner of the Year Award. This award
                recognizes partners that excel at providing innovative and
                unique customer solutions centered on Microsoft Dynamics 365
                Commerce.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Recognized For Our Rapid Growth
              </h2>
              <p className="text-gray-700 text-md md:text-base">
                Evenica was presented the Deloitte Technology Fast 50™ program
                award in 2020 for our rapid revenue growth, entrepreneurial
                spirit and bold innovation. The program recognizes technology
                companies with the highest revenue-growth percentage over the
                past four years. Evenica earned this recognition with 420%
                revenue growth from 2016 and 2019.
              </p>
            </div>
            <Image
              src="/Deloitte-1280x415.png"
              alt="Deloitte Fast 50"
              width={300}
              height={300}
              className="flex-shrink-0"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/partnership-success.png"
              alt="Partner Success Story"
              width={280}
              height={280}
              className="flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Partner Success Story
              </h2>
              <p className="text-gray-700 text-md md:text-base mb-4">
                Evenica is honoured to have been selected by Microsoft for a
                Partner Success Story, where we were able to share how we find
                success in D365 Commerce by working alongside partners. To read
                the story, please click below.
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://dynamicspartners.transform.microsoft.com/download?assetname=assets%2FEvenica-KASCO_Case%20study_11182021.pdf&download=1",
                    "_blank"
                  )
                }
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
