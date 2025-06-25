"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MaxWidthWrapper from "@/app/utility/MaxWidthWrapper";

const clients = [
  "Alcanna",
  "Andrew-Peller-Limited",
  "Bedrock-Manufacturing-2",
  "Filson",
  "Fire-Flower",
  "Henrys",
  "Horizon-Beverage-Group",
  "Kai-USA-Ltd-1",
  "Mirage-Flooring-Logo",
  "Nova-Cannabis",
  "Paul-Mitchell-1",
  "PRS-Guitars",
  "Shinola",
  "Steiner",
];

const groupedClients = Array.from(
  { length: Math.ceil(clients.length / 5) },
  (_, i) => clients.slice(i * 5, i * 5 + 5)
);

export default function ClientsCarousel() {
  return (
    <section>
      <MaxWidthWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Esteemed Clients
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {groupedClients.map((group, index) => (
              <CarouselItem
                key={index}
                className="flex justify-around items-center flex-wrap gap-8"
              >
                {group.map((client) => (
                  <Image
                    key={client}
                    src={`/clients/${client}.png`}
                    alt={client}
                    width={100}
                    height={60}
                  />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
}
