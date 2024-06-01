import React from "react";
import Mask from "./Mask";
import { motion } from "framer-motion";
import clsx from "clsx";

function MotionTextEl({
	el,
	children,
	duration = 0.5,
	delay = 0,
	className,
	bg = "black"
}) {
	return React.createElement(
		el, //부모요소명
		{ className: clsx("mframe", className) }, //부모요소 속성

		//첫번째 하위 자식 요소
		React.createElement(
			motion.span,
			{
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0, transition: { delay: 0 } },
				transition: { duration: 0.05, delay: delay + duration / 2 }
			},
			children
		),

		//두번째 하위 자식 요소
		React.createElement(Mask, {
			delay: delay,
			duration: duration,
			bg: bg
		})
	);
}

export default MotionTextEl;
