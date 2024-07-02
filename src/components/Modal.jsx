import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStoreOpen from "../hooks/useStore";

export default function Modal({ children }) {
	const { IsOpen, setClose } = useStoreOpen();

	useEffect(() => {
		document.body.style.overflow = IsOpen ? "hidden" : "auto";
	}, [IsOpen]);

	return (
		<AnimatePresence>
			{IsOpen && (
				<motion.aside
					className="fixed top-0 left-0 w-full h-screen bg-white/40 p-[10vw] z-50 backdrop-blur-lg"
					initial={{ x: "100%" }}
					animate={{ x: "0%" }}
					exit={{ x: "-100%", transition: { duration: 0.4, delay: 0.3 } }}
					transition={{ duration: 0.6 }}>
					<motion.div
						className="w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:object-contain"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1, delay: 0.7 } }}
						exit={{ opacity: 0, scale: 1.3, transition: { delay: 0 } }}>
						{children}
					</motion.div>
					<motion.span
						className="cursor-pointer absolute bottom-[4vw] right-[4vw] font-semibold"
						onClick={setClose}
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0, transition: { delay: 1.2 } }}
						exit={{ opacity: 0, x: 200 }}>
						close
					</motion.span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
}
