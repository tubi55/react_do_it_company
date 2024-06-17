import MotionText from "./MotionText";
import MotionTextEl from "./MotionTextEl";
import { FaFile } from "react-icons/fa";
import { motion } from "framer-motion";

function Slogan() {
	const delay = 0.6;
	const titleStyle = "text-6xl font-extrabold font-raleway max_md:text-4xl max_sm:text-3xl";
	return (
		<article className="relative w-[80%] flex flex-wrap justify-between max_md:-translate-y-20">
			<div className="w-[60%] order-2 max_xl:w-full max_xl:order-1">
				<MotionTextEl el={"h2"} delay={delay} className={titleStyle}>
					LEADING INOVATOR
				</MotionTextEl>
				<MotionTextEl el={"h2"} delay={delay + 0.2} className={titleStyle}>
					UI/UX DEVELOPER
				</MotionTextEl>

				<div className="mt-4">
					<MotionText delay={delay + 0.4}>Join us on a journey of digital transformation</MotionText>
					<br />
					<MotionText delay={delay + 0.6}>We pride ourselves on our commitment to quality and innovation</MotionText>
				</div>
			</div>

			<nav className="w-[30%] order-1 flex items-end justify-end max_xl:w-full max_xl:order-2 max_xl:justify-start max_xl:mt-16 max_sm:hidden ">
				<motion.button
					className="btn"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -50, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: delay + 0.8 }}>
					<FaFile />
					ABOUT DCODELAB
				</motion.button>
			</nav>
		</article>
	);
}

export default Slogan;
