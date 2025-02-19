import "../../app/globals.css";

interface Service {
	heading: string;
	description: string;
}
const tempServices = [
	{
		heading: "Service",
		description:
			"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
	},
	{
		heading: "Service",
		description:
			"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
	},
	{
		heading: "Service",
		description:
			"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
	},
	{
		heading: "Service",
		description:
			"Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
	},
];

const renderService = (service: Service, index: number) => {
	return (
		<div
			key={index}
			className="mx-12"
		>
			<h3 className="mb-6 font-bold">{service?.heading}</h3>
			<p>{service?.description}</p>
		</div>
	);
};

export default async function EMSServices() {
	return (
		<>
			<section
				id="ems-services"
				className="text-left w-lg"
			>
				<h3>EMS Services</h3>
				<h1>Something clever here about the company</h1>
			</section>
			<section className="flex flex-row my-24">
				{tempServices.map((ele, index) => renderService(ele, index))}
			</section>
		</>
	);
}
