"use client";

import Image from "next/image";
import Link from "next/link";

export default function CommerceSolutions() {
  return (
    <section className="bg-[#fafafa] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center content-center">
        <Image
          src={`/D365-Evenicas-e4.png`}
          alt="evenica-e4"
          height={600}
          width={600}
        />
        {/* Right text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold  mb-6">
            Innovative Commerce Solutions
          </h2>
          <p className="text-gray-700 mb-4">
            Microsoft Dynamics 365 Commerce implementations, enhanced with
            Evenica’s e4Platform. Choose from a wide range of modules to extend
            and amplify the capabilities of Commerce – designed with industry
            solutions in mind.
          </p>
          <p className="text-gray-700 mb-6">
            Evenica has robust solutions for customers in all major industries –
            including retail, manufacturing, public sector, healthcare and more.
          </p>
          <Link href="#" className="text-blue-600 hover:underline font-medium">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
