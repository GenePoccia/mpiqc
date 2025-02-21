import "../../app/globals.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
export default async function Contact() {
	return (
		<section>
			<div>
				<div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:gap-20">
					<div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
						<div className="text-center lg:text-left">
							<h3>Let's Build Something Great</h3>
							<h1>Request a Quote</h1>
							<p>
								Ready to bring your next project to life? Submit your RFQ today
								and experience world-class manufacturing with a partner who
								delivers precision, reliability, and scalability.
							</p>
						</div>
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
