"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";
import Link from "next/link";

export const SolutionsGrid = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Digital Commerce Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Our solutions fall into three categories:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="h-full flex flex-col transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                D365 Commerce
              </CardTitle>
              <CardDescription>
                Leading implementer of Microsoft Dynamics 365 Commerce.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                Evenica executes through proven methodology: discovery
                workshops, strategizing, deployment, and support.
              </p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link href="/solutions/e-commerce-implementation">
                  Explore Further
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="h-full flex flex-col transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                e4Dynamics
              </CardTitle>
              <CardDescription>
                Functional building blocks for D365 Commerce (B2C & B2B).
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                A library of independent building blocks to enhance Dynamics 365
                Commerce capabilities for both B2C and B2B companies.
              </p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link href="/contact">Explore Further</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="h-full flex flex-col transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                e4Platform
              </CardTitle>
              <CardDescription>
                Integrated commerce platform + micro-apps.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">
                Provides a core e-commerce framework with the option to
                incorporate micro-apps for advanced use cases functionality.
              </p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link href="/contact">Explore Further</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
