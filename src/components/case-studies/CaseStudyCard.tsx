import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CaseStudyCardProps {
  study: {
    id: number;
    title: string;
    image: string;
    description: string;
    pdfUrl: string;
  };
}

export const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 pt-0">
      <div className="relative h-60 w-full">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">{study.title}</CardTitle>
        <CardDescription className="text-gray-600 text-base">
          {study.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href={study.pdfUrl} target="_blank" rel="noopener noreferrer">
            View Case Study
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
