import "../../app/globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { ContactUsSectionData } from "@/types/sanityTypes";

export default function Contact({
	data,
	language,
}: {
	data: ContactUsSectionData | null;
	language: "en" | "fr";
}) {
	return (
		<section>
			<div>
				<div className="mx-auto flex max-w-screen-xl items-center flex-col justify-between gap-10">
					<h3>{data?.subHeader?.[language]}</h3>
					<h2>{data?.header?.[language]}</h2>
					<p className="w-md">{data?.paragraph?.[language]}</p>
					<div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
						<div className="text-center lg:text-left"></div>
					</div>
					<div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10 text-left text-black bg-white">
						<div className="flex gap-4">
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
						</div>
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								placeholder="Email"
							/>
						</div>
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="subject">Subject</Label>
							<Input
								type="text"
								id="subject"
								placeholder="Subject"
							/>
						</div>
						<div className="grid w-full gap-1.5">
							<Label htmlFor="message">Message</Label>
							<Textarea
								placeholder="Type your message here."
								id="message"
							/>
						</div>
						<Button className="w-full text-white bg-black">Send Message</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
