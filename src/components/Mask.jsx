import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function Mask({ delay = 0, duration = 0.5, bg = "black", className }) {
	return (
		<motion.div
			className={twMerge(
				"absolute top-0 left-0 z-30 w-full h-screen",
				className
			)}
			style={{ backgroundColor: bg }}
			initial={{ x: "-101%" }}
			animate={{ x: "101%" }}
			transition={{ duration, delay, ease: "easeInOut" }}
		/>
	);
}

export default Mask;
