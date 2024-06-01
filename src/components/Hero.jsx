import QuickNav from "./QuickNav";
import Slogan from "./Slogan";

function Hero() {
	return (
		<section className="relative flex flex-wrap items-center justify-center w-full h-screen overflow-hidden bg-white">
			{/* bg video */}
			<video
				className="absolute top-0 left-0 object-cover scale-105 opacity-60 size-full saturate-50"
				src="/vidBg.mp4"
				loop
				muted
				autoPlay
			/>

			{/* slogan */}
			<Slogan />

			{/* Quick Nav */}
			<QuickNav />
		</section>
	);
}

export default Hero;
