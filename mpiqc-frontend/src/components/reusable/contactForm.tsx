import { useState } from "react";
import "../../app/globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactUsSectionData } from "@/types/sanityTypes";

export default function ContactForm({
	data,
	language,
}: {
	data: ContactUsSectionData | null;
	language: "en" | "fr";
}) {
	const [image, setImage] = useState<File | null>(null);

	// Handle file selection
	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setImage(file);
		}
	};

	const handleSubmit = () => {
		window.alert("hi");
		console.log(image);
	};

	return (
		<div className="mx-auto flex w-full max-w-screen-md items-center flex-col justify-between gap-16 p-4 sm:p-6 md:p-8 lg:p-12 text-white">
			<div className="text-center">
				<h3 className="text-lg md:text-xl">{data?.subHeader?.[language]}</h3>
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
					{data?.header?.[language]}
				</h1>
			</div>

			<p className="w-full max-w-md text-sm md:text-base">
				{data?.paragraph?.[language]}
			</p>

			<div className="mx-auto flex w-full max-w-lg flex-col gap-6 sm:gap-8 rounded-lg border p-6 sm:p-8 md:p-10 lg:p-12 text-left text-black bg-white">
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="firstname">First Name</Label>
					<Input
						type="text"
						id="firstname"
						placeholder="First Name"
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="lastname">Last Name</Label>
					<Input
						type="text"
						id="lastname"
						placeholder="Last Name"
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						placeholder="Email"
					/>
				</div>
				<div className="grid w-full gap-1.5">
					<Label htmlFor="message">Message</Label>
					<Textarea
						placeholder="Type your message here."
						id="message"
					/>
				</div>

				<Button
					className="w-full text-white bg-black"
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}
