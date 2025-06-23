import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

export const CaseStudyHeader = () => {
  return (
    <section className="text-center mb-18">
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Case Studies
        </h1>
        <p className="text-lg text-gray-600">
          Explore our successful projects and client success stories
        </p>
      </MaxWidthWrapper>
    </section>
  );
};
