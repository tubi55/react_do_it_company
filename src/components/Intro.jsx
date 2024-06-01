import Line from "./Line";

function Intro({ children }) {
	return (
		<article className="mb-24 text-base font-medium text-black/70">
			<Line className="mb-10" size={"size-1/12"} delay={1.5} />
			{children}
		</article>
	);
}

export default Intro;
