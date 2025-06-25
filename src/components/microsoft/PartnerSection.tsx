"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const PartnerSection = () => {
  return (
    <section>
      <MaxWidthWrapper>
        {/* Partnership Approach */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Microsoft Partnership
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Through an uncompromising commitment to our customers&apos;
                success, Evenica is recognized as one of the most experienced
                e-commerce partners in the Microsoft ecosystem.
              </p>
              <p>
                We approach partnerships with an end goal of providing
                exceptional customer experiences and driving mutual growth
                through technical collaboration.
              </p>
              <p>
                Long-term alignment with our partners fuels innovation and
                sustainable growth.
              </p>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
            <Image
              src="/Evenica_Microsoft-Toronto-HQ.jpg"
              alt="Microsoft Partnership"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Partner of the Year */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-[#0D0D3C] p-8 rounded-xl">
          <div className="flex-shrink-0">
            <Image
              src="/Finalist-Logo-1280x536.png"
              alt="Partner of the Year"
              width={300}
              height={125}
              className="w-full max-w-[300px]"
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
              Evenica was honored as a finalist for the 2022 Microsoft Partner
              of the Year Award in Dynamics 365 Commerce, recognizing our
              innovative customer solutions.
            </p>
          </div>
        </div>

        {/* Competencies & Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Microsoft Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Competencies */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Competencies
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-yellow-600 mb-3">
                    GOLD CERTIFIED
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Application Development
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Application Integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      Cloud Platform
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-500 mb-3">
                    SILVER CERTIFIED
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      Data Platform
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Marketplace Offers */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Marketplace Offers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  e4Integrate
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Dynamics 365 Commerce Quick Start
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Proof of Concept
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Dynamics 365 Connectors
                </li>
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Areas of Expertise
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Dynamics 365 Commerce
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  D365 Integrations
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Legacy ERP/CRM Integration
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Connector Development
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Participation */}
        <div className="mb-20 text-center">
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
        </div>

        {/* Success Story & Quote */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Success Story */}
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
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              Read the Story
            </Button>
          </div>

          {/* CEO Quote */}
          <div className="bg-gray-100 p-8 rounded-xl">
            <blockquote className="space-y-6">
              <p className="text-xl italic text-gray-700 leading-relaxed">
                &quot;I grew up with Microsoft. It&apos;s a transformative
                company that changes the world one day at a time. At Evenica, we
                too aspire to reach the ideals of doing more, creating
                innovative technologies, and ultimately, fostering a world where
                people treat each other with respect, integrity and
                accountability.&quot;
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
};
