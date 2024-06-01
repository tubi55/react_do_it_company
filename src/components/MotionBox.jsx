import Mask from "./Mask";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function MotionBox({
	children,
	duration = 0.5,
	delay = 0,
	bg = "black",
	className
}) {
	return (
		<div className={twMerge("cursor-pointer mframe", className)}>
			<motion.div
				className="size-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { delay: 0 } }}
				transition={{ duration: 0.05, delay: delay + duration / 2 }}>
				{children}
			</motion.div>
			<Mask delay={delay} duration={duration} bg={bg} />
		</div>
	);
}

export default MotionBox;
