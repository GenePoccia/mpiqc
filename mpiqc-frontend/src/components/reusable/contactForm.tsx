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
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess(false);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSuccess(true);
				setFormData({ firstname: "", lastname: "", email: "", message: "" });
			} else {
				setError("Failed to send message.");
			}
		} catch (error) {
			setError("An error occurred.");
		} finally {
			setLoading(false);
		}
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

			<form
				onSubmit={handleSubmit}
				className="mx-auto flex w-full max-w-lg flex-col gap-6 sm:gap-8 rounded-lg border p-6 sm:p-8 md:p-10 lg:p-12 text-left text-black bg-white"
			>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="firstname">First Name</Label>
					<Input
						type="text"
						id="firstname"
						placeholder="First Name"
						value={formData.firstname}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="lastname">Last Name</Label>
					<Input
						type="text"
						id="lastname"
						placeholder="Last Name"
						value={formData.lastname}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="email">Email</Label>
					<Input
						type="email"
						id="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="grid w-full gap-1.5">
					<Label htmlFor="message">Message</Label>
					<Textarea
						id="message"
						placeholder="Type your message here."
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>

				<Button
					className="w-full text-white bg-black"
					type="submit"
					disabled={loading}
				>
					{loading ? "Sending..." : "Submit"}
				</Button>

				{success && <p className="text-black">Message sent successfully!</p>}
				{error && <p className="text-red-600">{error}</p>}
			</form>
		</div>
	);
}
