"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-[#0D0D3C] to-blue-100 py-16">
      <MaxWidthWrapper>
        <div className="bg-white p-10 rounded shadow-md flex flex-col md:flex-row items-center justify-around gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-grey-700 mb-3">
              Innovative Experiences Start With Evenica
            </h2>
            <p className="text-gray-700 max-w-2xl">
              Evenica supports brands by providing the most demanding and
              sophisticated digital experiences through e-commerce solutions.
            </p>
          </div>
          <Button asChild>
            <Link href="/contact">GET STARTED</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
