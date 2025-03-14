import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const { firstname, lastname, email, message } = await req.json();

		// Set up Nodemailer transport
		const transporter = nodemailer.createTransport({
			host: "smtp-relay.brevo.com",
			port: 587, // Use 465 for SSL, 2525 as an alternative
			secure: false, // Set to true if using port 465
		});

		// Email options
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
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
