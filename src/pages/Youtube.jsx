import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";

function Youtube() {
	const delay = 1.8;
	return (
		<Layout title={"YOUTUBE"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						Dolor sit lorem ipsum dolor sit amet Aspe riores ipsum dolor sit
						amet consec, beatae ipsum dolor.
					</motion.span>
					<Mask delay={delay} />
				</div>
				<br />
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 + 0.2 }}>
						Bit ametDolor sit amet consectetur adipisicing elit ctetur adipisi.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>
			<Content>Youtube content comes here in detail.</Content>
		</Layout>
	);
}

export default Youtube;
