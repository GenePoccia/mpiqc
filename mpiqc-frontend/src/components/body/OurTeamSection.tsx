"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MeetTheTeamSectionData } from "@/types/sanityTypes";
import { meetTheTeamMagazine } from "../reusable/magazines";

export default function OurTeam({
  data,
  language,
}: {
  data: MeetTheTeamSectionData | null;
  language: "en" | "fr";
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <>
      <h1>{data?.header[language]}</h1>
      <section className="relative h-96 max-h-[500px] mx-auto mt-5 max-w-7xl lg:mt-6 mb-12">
        <Carousel
          setApi={setCarouselApi}
          opts={{ loop: true }}
          className="w-full max-w-7xl h-96 max-h-[500px] z-10"
        >
          <CarouselContent>
            {data?.teamMembers?.map((member, index) => (
              <CarouselItem key={index}>
                <Card className="bg-gray-500">
                  <CardContent className="flex items-center justify-center h-96 max-h-[500px] p-6">
                    <span className="text-4xl font-semibold">
                      {member && meetTheTeamMagazine(member, language)}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 z-20 flex items-center justify-between pointer-events-none">
          <Button
            onClick={() => scrollToIndex(currentIndex - 1)}
            className="pointer-events-auto absolute -left-10 h-full bg-transparent shadow-none hover:bg-transparent flex items-center justify-center"
          >
            <ChevronLeft className="!w-12 !h-12" strokeWidth={0.5} />
          </Button>
          <Button
            onClick={() => scrollToIndex(currentIndex + 1)}
            className="pointer-events-auto absolute -right-10 h-full bg-transparent shadow-none hover:bg-transparent flex items-center justify-center"
          >
            <ChevronRight className="!w-12 !h-12" strokeWidth={0.5} />
          </Button>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
