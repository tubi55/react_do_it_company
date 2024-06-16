import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Content from "../components/Content";
import Mask from "../components/Mask";
import { motion } from "framer-motion";

function Contact() {
	const delay = 1.2;
	return (
		<Layout title={"CONTACT"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, beatae.
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
						Dolor sit amet consectetur adipisicing elit.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>
			<Content>Contact content comes here in detail.</Content>
		</Layout>
	);
}

export default Contact;
