"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export const SuccessAndQuote = () => (
  <section>
    <MaxWidthWrapper>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Partner Success Story
            </h3>
          </div>
          <p className="text-gray-700 mb-6">
            Evenica was selected by Microsoft to showcase our success in D365
            Commerce implementations through collaborative partnerships.
          </p>
          <Button
            variant="secondary"
            onClick={() =>
              window.open(
                "https://dynamicspartners.transform.microsoft.com/download?assetname=assets%2FEvenica-KASCO_Case%20study_11182021.pdf&download=1",
                "_blank"
              )
            }
          >
            Read the Story
          </Button>
        </div>

        <div className="bg-gray-100 p-8 rounded-xl">
          <blockquote className="space-y-6">
            <p className="text-xl italic text-gray-700 leading-relaxed">
              &quot;I grew up with Microsoft. It&apos;s a transformative company
              that changes the world one day at a time. At Evenica, we too
              aspire to reach the ideals of doing more, creating innovative
              technologies, and ultimately, fostering a world where people treat
              each other with respect, integrity and accountability.&quot;
            </p>
            <footer className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Sadek Ali</p>
                <p className="text-gray-600">CEO & Co-Founder at Evenica</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
);
