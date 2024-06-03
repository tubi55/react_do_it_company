import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import Utils from "./Utils";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Nav() {
	const [MobileMenu, setMobileMenu] = useState(false);

	return (
		<>
			<button
				className="fixed top-7 right-[5%] z-50 hidden text-xl text-black/70 max_lg:block"
				onClick={() => setMobileMenu(!MobileMenu)}>
				<FaBars />
			</button>

			<AnimatePresence>
				{MobileMenu && (
					<motion.aside
						className="fixed top-0 left-0 z-50 flex flex-wrap content-end h-screen shadow-xl w-80 bg-white/50 backdrop-blur"
						initial={{ x: -320, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -320, opacity: 0 }}
						transiiton={{ duration: 0.5 }}
						onClick={() => setMobileMenu(false)}>
						<article className="w-full h-[50%] p-10 border-b border-b-black/10 ">
							<div>
								<h1 className="mb-4 text-4xl font-black">
									<Link to="/">DCODELAB</Link>
								</h1>
								<p className="text-xs">
									Lorem ipsum dolor sit, amet consectetur adipisicing.
								</p>
							</div>
							<Utils isMobile={true} />
						</article>

						<Gnb isMobile={true} />
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
}

export default Nav;
