import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import Image from "next/image";
import React from "react";

export default function IntroSection() {
  return (
    <section className="mb-18">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Proven Implementation Methodology
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With decades of experience in e-commerce implementation, Evenica
              uses a refined implementation methodology to offer rapid
              turnaround and dependable value.
            </p>
            <p className="text-lg text-gray-700">
              Evenica helps implement e-commerce solutions wrapped around your
              business needs, creating a seamless connected commerce
              environment. All implementation services include discovery
              workshops, strategizing, deployment and training.  
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden">
            <Image
              src="/Evenica_E-commerce-Implementation.png"
              alt="E-commerce implementation process"
              width={600}
              height={300}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
