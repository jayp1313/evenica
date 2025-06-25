"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPinIcon, PhoneIcon, MailIcon, LifeBuoyIcon } from "lucide-react";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import Link from "next/link";

export default function ContactInfoSection() {
  return (
    <section className="py-16 mb-18">
      <MaxWidthWrapper>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-100 shadow-lg hover:shadow-xl">
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Head Office
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <address className="not-italic text-gray-700 space-y-3">
                  <p className="flex items-start">
                    <span>
                      3050 Harvester Rd, Unit 208
                      <br />
                      Burlington, ON L7N 3J1
                      <br />
                      Canada
                    </span>
                  </p>
                  <p className="mt-4 flex items-center">
                    <PhoneIcon className="w-4 h-4 mr-2 text-purple-500" />
                    <a
                      href="tel:+18442270453"
                      className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                      +1 844 227 0453
                    </a>
                  </p>
                </address>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-lg hover:shadow-xl overflow-hidden">
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Sales & Inquiries
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 mb-4">
                  We&apos;d love to discuss how we can help grow your business.
                </p>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <MailIcon className="w-4 h-4 mr-2 text-blue-500" />
                    <a
                      href="mailto:info@evenica.com"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      info@evenica.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <PhoneIcon className="w-4 h-4 mr-2 text-blue-500" />
                    <a
                      href="tel:+18442270453"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Sales Hotline
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-lg hover:shadow-xl  overflow-hidden">
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <LifeBuoyIcon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Technical Support
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-700 mb-4">
                  Our experts are ready to assist with any technical questions.
                </p>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <MailIcon className="w-4 h-4 mr-2 text-green-500" />
                    <a
                      href="mailto:support@evenica.com"
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      support@evenica.com
                    </a>
                  </p>
                  <p className="flex items-center ">
                    <PhoneIcon className="w-4 h-4 mr-2 text-green-500" />

                    <Link
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                      href="https://evenica.atlassian.net/servicedesk/customer/portals"
                    >
                      Support Portal
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
