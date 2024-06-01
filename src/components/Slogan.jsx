import { FaFile } from "react-icons/fa";

function Slogan() {
	const titleStyle =
		"text-6xl font-extrabold font-raleway max_md:text-4xl max_sm:text-3xl";
	return (
		<article className="relative w-[80%] flex flex-wrap justify-between max_md:-translate-y-20">
			<div className="w-[60%] order-2 max_xl:w-full max_xl:order-1">
				<h2 className={titleStyle}>LEADING INOVATOR</h2>
				<h2 className={titleStyle}>UI/UX DESIGN</h2>

				<div className="mt-4">
					<div>Join us on a journey of digital transformation</div>
					<div>
						We pride ourselves on our commitment to quality and innovation
					</div>
				</div>
			</div>

			<nav className="w-[30%] order-1 flex items-end justify-end max_xl:w-full max_xl:order-2 max_xl:justify-start max_xl:mt-16 ">
				<button className="btn">
					<FaFile />
					ABOUT DCODELAB
				</button>
			</nav>
		</article>
	);
}

export default Slogan;
