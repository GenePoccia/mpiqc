import "../../app/globals.css";

const logos = [
	{
		id: "logo-1",
		description: "Logo 1",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-2",
		description: "Logo 2",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-3",
		description: "Logo 3",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-1",
		description: "Logo 1",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-2",
		description: "Logo 2",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-3",
		description: "Logo 3",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-1",
		description: "Logo 1",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-2",
		description: "Logo 2",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
	{
		id: "logo-3",
		description: "Logo 3",
		image:
			"https://s3-alpha-sig.figma.com/img/0707/e6b2/022462187b7b2dab43ed95bab6b24a66?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dXJeXjK7w~Jw05ZAFPfXDj6l9y74y5w6g9DHjdkFEJvg7KH5tn6l2h3EEoF~kfL-hBkkuVtsoXyJTn4V4HTjOhnZM33uv~hk-svhfiinn18Mv-ngtKVC-UkQVF2yTekHnH0SC~U60Tl0QF6tKAa0QUZcgc1WIqnccYYvICl5QmF-0dSK47g~8raTmO4BTP11wR6o1sVX48HSWz8n~rGGQvWC11BuFaHe4GLIYvO15iq48xgBn5BlmSxoD9nQ4pCrx3eUmWLcjyXp5Kqn8U~LGaw711oZJ~yUqPA6VLHPdZmvQwaqqQSrwh2FLAPTCguwJegmyqWU1qeZjgouSvMHdQ__",
	},
];

interface Logo {
	id: string;
	description: string;
	image: string;
}
const renderLogos = (logo: Logo, index: number) => {
	return (
		<div
			className="flex items-center justify-center"
			key={`${logo?.id}_` + index}
		>
			<img
				src={logo.image}
				alt={logo.description}
				className="h-7 w-auto"
			/>
		</div>
	);
};
export default async function Certifications() {
	return (
		<section
			id="certifications"
			className="flex flex-col my-24 text-center"
		>
			<h3 className="mb-4">Certifications</h3>
			<p className="mx-auto w-3xl">
				Quality and compliance are at the core of what we do. MPIQC is certified
				to meet global industry standards, ensuring performance and safety in
				every product we manufacture.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
				{logos.map((logo, index) => renderLogos(logo, index))}
			</div>
		</section>
	);
}
