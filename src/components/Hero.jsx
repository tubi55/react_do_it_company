import QuickNav from "./QuickNav";
import Slogan from "./Slogan";
import { motion } from "framer-motion";

function Hero() {
	return (
		<section className="relative flex flex-wrap items-center justify-center w-full h-screen overflow-hidden bg-white">
			{/* bg video */}
			<motion.video
				className="absolute top-0 left-0 object-cover scale-105 opacity-60 size-full saturate-50"
				src="/vidBg.mp4"
				loop
				muted
				autoPlay
				initial={{ opacity: 0, scale: 2 }}
				animate={{ opacity: 0.6, scale: 1.01 }}
				exit={{ opacity: 0, scale: 2, transition: { delay: 0 } }}
				transition={{ duration: 1, delay: 1 }}
			/>

			{/* slogan */}
			<Slogan />

			{/* Quick Nav */}
			<QuickNav />
		</section>
	);
}

export default Hero;
