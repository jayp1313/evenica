import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import React from "react";

export default function ValuesCard() {
  return (
    <section>
      <MaxWidthWrapper>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          Why Partner With Evenica
        </h3>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
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
              <h3 className="text-xl font-semibold">EXPERIENCE</h3>
            </div>
            <p className="text-gray-700">
              With decades of e-commerce experience under our belt, Evenica is
              the premiere partner to lead your e-commerce implementation and
              evolution.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">COMMITMENT</h3>
            </div>
            <p className="text-gray-700">
              We consider ourselves a member of your team – long-term partners
              committed to your success and always ready to roll up our sleeves.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">RAPID TURNAROUND</h3>
            </div>
            <p className="text-gray-700">
              Our perfected Evenica Methodology ensures a rapid turnaround and
              adaptable e-commerce strategy that grows with your needs.
            </p>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
