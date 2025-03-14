import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// DELETE THIS PAGE
export async function POST(req: NextRequest) {
	try {
		const { firstname, lastname, email, message } = await req.json();

		// Set up Nodemailer transport
		const transporter = nodemailer.createTransport({
			service: "Gmail", // Use your email provider
			auth: {
				user: process.env.EMAIL_USER, // Your email
				pass: process.env.EMAIL_PASS, // Your email app password
			},
		});

		// Email options
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER, // Change this to your email
			subject: "New Contact Form Submission",
			text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${message}`,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Email sent successfully!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
