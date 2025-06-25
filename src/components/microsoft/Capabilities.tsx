"use client";

import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const Capabilities = () => (
  <section>
    <MaxWidthWrapper>
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
                  <span className="text-yellow-500 mr-2">•</span> Application
                  Development
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span> Application
                  Integration
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span> Cloud Platform
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-500 mb-3">
                SILVER CERTIFIED
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span> Data Platform
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
              <span className="text-blue-500 mr-2">•</span> e4Integrate
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Dynamics 365
              Commerce Quick Start
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Proof of Concept
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span> Dynamics 365
              Connectors
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
              <span className="text-purple-500 mr-2">•</span> Dynamics 365
              Commerce
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> D365 Integrations
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Legacy ERP/CRM
              Integration
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span> Connector
              Development
            </li>
          </ul>
        </div>
      </div>
    </MaxWidthWrapper>
  </section>
);
