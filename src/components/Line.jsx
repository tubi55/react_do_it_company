import clsx from "clsx";
import { motion } from "framer-motion";

function Line({
	horizontal = true, //true: 가로선(기본값), false: 세로선
	size = "size-full", //부모에 들어온 size값에 따라 선의 길이 설정 (기본값: 100%)
	bg = "bg-black", //선의 배경색 (기본값: 검정)
	className, //추가적인 스타일 넘겨받아 적용
	delay = 0,
	duration = 0.5
}) {
	const horizontalStyle = `${size} h-[1px] ${bg}`; //가로선 스타일
	const verticalStyle = `${size} w-[1px]  ${bg}`; //세로선 스타일
	return (
		<motion.div
			className={clsx(className, horizontal ? horizontalStyle : verticalStyle)}
			style={horizontal ? { originX: 0 } : { originY: 0 }}
			initial={horizontal ? { scaleX: 0 } : { scaleY: 0 }}
			animate={horizontal ? { scaleX: 1 } : { scaleY: 1 }}
			exit={
				horizontal
					? { scaleX: 0, transition: { delay: 0 } }
					: { scaleY: 0, transition: { delay: 0 } }
			}
			transition={{ duration: duration, delay: delay }}
		/>
	);
}

export default Line;
