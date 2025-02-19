export default async function WelcomeSection() {
	return (
		<section
			id="home"
			className="relative min-h-screen p-6"
		>
			<div className="absolute text-left bottom-32 left-6 space-y-4 max-w-[90%] sm:max-w-[70%]">
				<h1 className="text-4xl font-bold sm:text-3xl">We set the standard.</h1>
				<p className="border-l-2 border-white pl-6">
					MPIQC is a premiere provider of a comprehensive suite of contract
					manufacturing solutions and services.
					<br />
					As a team of professionals, we treat our customers as partners while
					remaining focused on delivering high-quality, high-value, flexible CM
					solutions our customers have come to demand.
				</p>
			</div>
		</section>
	);
}
