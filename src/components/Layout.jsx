import Breadcrumb from "./Breadcrumb";
import Mask from "./Mask";
import MotionTextEl from "./MotionTextEl";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

function Layout({ title, children }) {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<>
			<main className="px-[10vw] pt-[22vh] pb-[5vh] flex justify-between flex-wrap max_md:pt-[16vh]">
				<MotionTextEl
					el={"h2"}
					delay={0.5}
					className={twMerge(
						"font-thin font-raleway tracking-tight text-[7vmax] text-black/70 max_md:text-[16vmin] leading-none mb-4",
						title?.length > 30 && "text-[5vmax] max_md:text-5xl"
					)}>
					{title?.toUpperCase()}
				</MotionTextEl>

				<Breadcrumb />

				<section className="w-full min-h-[100vh] mt-8">{children}</section>
			</main>
			<Mask duration={0.7} className="fixed" />
		</>
	);
}

export default Layout;
