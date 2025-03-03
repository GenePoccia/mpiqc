import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full bg-white py-8 px-4 md:px-8">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				{/* Left side - Logo */}
				<div className="mb-6 md:mb-0">
					<Image
						src="/logo.png"
						alt="MPIQC Logo"
						width={180}
						height={60}
						className="h-auto"
					/>
				</div>

				{/* Right side - Contact info and circles */}
				<div className="flex flex-col items-center md:items-end space-y-3">
					{/* Email */}
					<a
						href="mailto:info@mpiqc.com"
						className="text-gray-800 hover:text-blue-600 transition-colors"
					>
						info@mpiqc.com
					</a>

					{/* Phone */}
					<a
						href="tel:+18554667472"
						className="text-gray-800 hover:text-blue-600 transition-colors"
					>
						+1-855-466-7472
					</a>

					{/* Three small circles in a row */}
					<div className="flex space-x-2">
						<div>social media</div>
					</div>
				</div>
			</div>
			<div>© 2025 MPIQC</div>
		</footer>
	);
};

export default Footer;
