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
import { MeetTheTeamSectionData, SanityImage } from "@/types/sanityTypes";
import { meetTheTeamMagazine } from "../reusable/magazines";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
  return builder.image(source);
}


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

  const imageUrl = data?.backgroundImage
    ? urlFor(data.backgroundImage).url()
    : "";

  return (
    <>
      <section
        id="meet-the-team"
        className="relative flex flex-col w-full min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        }}
      >
        {/* Heading at the top with padding */}
        <div className="w-full text-center mt-24">
          <h1 className="text-4xl font-bold">{data?.header[language]}</h1>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div className="relative w-full max-w-7xl mx-6 lg:mx-24">
            {/* Background div with opacity */}
            <div className="absolute inset-0 bg-[rgba(82,82,82,0.75)] rounded-lg"></div>

            {/* Content container - fully opaque */}
            <div className="relative z-10 lg:p-8 w-full">
              <Carousel
                setApi={setCarouselApi}
                opts={{ loop: true }}
                className="w-full h-96 max-h-[500px]"
              >
                <CarouselContent>
                  {data?.teamMembers?.map((member, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-none">
                        <CardContent className="px-0 flex items-center justify-center h-96 max-h-[500px] mx-12 min-h-full">
                          <span className="text-4xl font-semibold">
                            {member && meetTheTeamMagazine(member, language)}
                          </span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-4 mb-0 sm:mb-4">
                {Array.from({ length: totalItems }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-black" : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 bottom-110 z-20 flex max-w-[1440px] w-full mx-auto pointer-events-none justify-between">
  <Button
    onClick={() => scrollToIndex(currentIndex - 1)}
    className="pointer-events-auto rounded-full w-32 h-32 p-0 bg-transparent shadow-none hover:bg-transparent"
  >
    <img src="/images/arrow-left.svg" alt="arrow-left" />
  </Button>
  <Button
    onClick={() => scrollToIndex(currentIndex + 1)}
    className="pointer-events-auto rounded-full w-32 h-32 p-0 bg-transparent shadow-none hover:bg-transparent"
  >
    <img src="/images/arrow-right.svg" alt="arrow-right" />
  </Button>
</div>

      </section>
    </>
  );
}