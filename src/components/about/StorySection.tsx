"use client";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import React from "react";

export default function StorySection() {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Evenica was founded in 2014 by{" "}
            <span className="font-semibold text-purple-600">Mike Bolton</span>{" "}
            and <span className="font-semibold text-purple-600">Sadek Ali</span>{" "}
            after two decades of technology and e-commerce experience led to an
            undeniable quench for innovation. They wanted to create a company
            that delivered exceptional customer service and was tenacious enough
            to solve even the most complex e-commerce challenges. Above all,
            Mike and Sadek wanted to create a work environment that allowed
            employees to have freedom of expression and the courage to seek out
            unique e-commerce solutions.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
