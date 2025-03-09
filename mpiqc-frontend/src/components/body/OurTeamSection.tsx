"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CustomCarouselNext,
	CustomCarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { MeetTheTeamSectionData, SanityImage } from "@/types/sanityTypes";
import { meetTheTeamMagazine } from "../reusable/magazines";

import Image from "next/image";

export default function OurTeam({
	data,
	language,
}: {
	data: MeetTheTeamSectionData | null;
	language: "en" | "fr";
}) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div
			id="our-team"
			className="h-screen w-full flex items-center justify-center p-4 bg-background"
		>
			<div className="w-full mx-12 lg:mx-0 max-w-4xl">
				<Carousel
					setApi={setApi}
					className="w-full relative"
				>
					<CarouselContent>
						{data?.teamMembers?.map((member, index) => (
							<CarouselItem key={index}>
								<Card>
									<CardContent className="flex aspect-video items-center justify-center p-6">
										<span className="text-4xl font-semibold">
											{member && meetTheTeamMagazine(member, language)}
										</span>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Arrow navigation (visible only on large screens) */}
					<CustomCarouselPrevious className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 h-20 w-20 items-center justify-center bg-transparent border-0 hover:bg-transparent">
						<Image
							src="/images/arrow-left.svg"
							alt="Previous slide"
							width={20}
							height={20}
							className="w-full h-full object-contain"
						/>
					</CustomCarouselPrevious>

					<CustomCarouselNext className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 h-20 w-20 items-center justify-center bg-transparent border-0 hover:bg-transparent">
						<Image
							src="/images/arrow-right.svg"
							alt="Next slide"
							width={20}
							height={20}
							className="w-full h-full object-contain"
						/>
					</CustomCarouselNext>

					{/* Dot indicators */}
					<div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
						{Array.from({ length: count }).map((_, index) => (
							<button
								key={index}
								className={cn(
									"h-3 w-3 rounded-full transition-all",
									current === index ? "bg-black" : "bg-gray-300"
								)}
								onClick={() => api?.scrollTo(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</Carousel>
			</div>
		</div>
	);
}
