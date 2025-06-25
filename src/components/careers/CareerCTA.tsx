"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const CareerCTA = () => {
  return (
    <section className="bg-[#0D0D3C] text-white py-16 text-center my-12">
      <MaxWidthWrapper>
        <div className="text-white">
          <h3 className="text-2xl font-bold text-white mb-3">
            Not seeing your role?
          </h3>
          <p className="mb-6 ">
            We&apos;re always looking for talent. Share your resume and
            we&apos;ll contact you about future opportunities.
          </p>
          <p className="font-medium text-lg">
            Please send your resume to{" "}
            <a className="underline" href="mailto:careers@evenica.com">
              careers@evenica.com
            </a>
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
