"use client";
import Image from "next/image";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const CultureSection = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-2 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Our Culture
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                At Evenica we&apos;re always interested in people who are
                ambitious, dedicated and love what they do. We have a mindset of
                growth and a culture of collaboration, passion and innovation.
              </p>
              <p>
                Our goal is to deliver exceptional user experiences within
                complex technology environments using top talent in a fun and
                dynamic way. We are excited to foster a workplace that allows
                people to meet challenges and provides the opportunity to make
                an impact in a growing business.
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/Evenica_Careers.png"
                alt="evenica-careers"
                width={300}
                height={300}
                className=""
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
