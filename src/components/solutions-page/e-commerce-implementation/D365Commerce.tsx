import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export default function D365Commerce() {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Microsoft Dynamics 365 Commerce
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Evenica is the leading implementor of Microsoft Dynamics 365
              Commerce and an early adopter of this robust platform. We&apos;re
              trusted by some of the world&apos;s most respected brands with
              implementation through our experienced team using our rapid time
              to value deployment.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Evenica is a Microsoft Gold Partner and recognized as e-commerce
              experts within the Microsoft channel.
            </p>
            <div className="bg-grey-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-grey-800 mb-2">
                Quick Start Program
              </h4>
              <p className="text-grey-700">
                Our revolutionary program begins the B2C/B2B journey in a short
                period of time, including e-commerce strategy consulting,
                solution road mapping and implementation of the D365 Commerce
                platform.
              </p>
            </div>
            <Button asChild>
              <Link href="https://www.microsoft.com/en-us/dynamics-365/products/commerce">
                Learn more <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="order-2 md:order-1">
            <Image
              src="/D365-Commerce.png"
              alt="Microsoft Dynamics 365 Commerce"
              width={600}
              height={400}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
