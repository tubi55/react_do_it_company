import Breadcrumb from "./Breadcrumb";
import Mask from "./Mask";
import MotionTextEl from "./MotionTextEl";

function Layout({ title, children }) {
	return (
		<>
			<main className="px-[10vw] pt-[22vh] pb-[5vh] flex justify-between flex-wrap max_md:pt-[16vh]">
				<MotionTextEl
					el={"h2"}
					delay={0.7}
					className="font-thin font-raleway leading-none tracking-tight text-[7vmax] text-black max_md:text-[16vmin]">
					{title}
				</MotionTextEl>
				<Breadcrumb />

				<section className="w-full min-h-[100vh] mt-8">{children}</section>
			</main>
			<Mask duration={0.7} className="fixed" />
		</>
	);
}

export default Layout;
