"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CommerceSolutions() {
  return (
    <section className="bg-[#0D0D3C] text-white py-20 my-12">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center content-center">
          <Image
            src={`/D365-Evenicas-e4.png`}
            alt="evenica-e4"
            height={600}
            width={600}
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold  mb-6">
              Innovative Commerce Solutions
            </h2>
            <p className="text-gray-200 mb-4">
              Microsoft Dynamics 365 Commerce implementations, enhanced with
              Evenica’s e4Platform. Choose from a wide range of modules to
              extend and amplify the capabilities of Commerce – designed with
              industry solutions in mind.
            </p>
            <p className="text-gray-200 mb-6">
              Evenica has robust solutions for customers in all major industries
              – including retail, manufacturing, public sector, healthcare and
              more.
            </p>
            <Button variant="outline" asChild>
              <Link href="/solutions">
                Learn more <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
