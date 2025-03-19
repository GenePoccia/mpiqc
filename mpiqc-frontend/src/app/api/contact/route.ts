import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		if (
			!body.firstname ||
			!body.lastname ||
			!body.email ||
			!body.message ||
			!body.company
		) {
			throw new Error("Missing required fields");
		}

		const { firstname, lastname, email, message, company } = body;

		// Set up Nodemailer transport
		const transporter = nodemailer.createTransport({
			host: process.env.NEXT_PUBLIC_EMAIL_HOST,
			port: 587,
			secure: false,
			auth: {
				user: process.env.NEXT_PUBLIC_EMAIL_AUTH,
				pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});

		// Email options
		const mailOptions = {
			from: process.env.NEXT_PUBLIC_EMAIL_FROM_EMAIL,
			to: process.env.NEXT_PUBLIC_EMAIL_USER,
			subject: "New Contact Form Submission",
			text: `Name: ${firstname} ${lastname}\nEmail: ${email} \nCompany Name: ${company} \nMessage: ${message}`,
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Email sent successfully!" },
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error sending email:", error.message);
			console.error(error);
			return NextResponse.json(
				{ error: `Failed to send email: ${error.message}` },
				{ status: 500 }
			);
		} else {
			console.error("Unexpected error:", error);
			return NextResponse.json(
				{ error: "Failed to send email due to an unknown error" },
				{ status: 500 }
			);
		}
	}
}
