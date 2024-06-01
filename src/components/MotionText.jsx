import Mask from "./Mask";
import { motion } from "framer-motion";
import clsx from "clsx";

function MotionText({
	children,
	duration = 0.5,
	delay = 0,
	className,
	bg = "black"
}) {
	return (
		<div className={clsx("mframe", className)}>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { delay: 0 } }}
				transition={{ duration: 0.05, delay: delay + duration / 2 }}>
				{children}
			</motion.span>
			<Mask delay={delay} duration={duration} bg={bg} />
		</div>
	);
}

export default MotionText;
