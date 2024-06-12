import React from "react";
import Mask from "./Mask";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useCustomText } from "../hooks/useText";

function Breadcrumb() {
	const { pathname } = useLocation();
	const arr = pathname.split("/").map(el => (el === "" ? (el = "HOME") : el));
	const delay = 1.2;
	const shortenText = useCustomText("shorten");

	return (
		<nav className="flex items-end gap-3 mt-3 max_md:mt-12">
			{arr.map((path, idx) => {
				return (
					<React.Fragment key={idx}>
						{
							//첫 번째 배열 순번이 아닐때만 > 출력
							idx !== 0 ? (
								<motion.span
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 10, transition: { delay: 0 } }}
									transition={{ duraition: 2, delay: delay + 0.5 }}>
									&gt;
								</motion.span>
							) : null
						}
						<span className="mframe">
							{
								//현재 반복도는 메뉴가 마지막 요소가 아닐땐 Link연결
								idx !== arr.length - 1 ? (
									<Link to={idx === 0 ? "/" : "/" + path}>
										<motion.span
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0, transition: { delay: 0 } }}
											transition={{
												duration: 0.05,
												delay: delay + 0.2 * idx + 0.25
											}}>
											{path.toUpperCase()}
										</motion.span>
									</Link>
								) : (
									//만약 마지막 메뉴면 Link없이 메뉴명만 출력
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0, transition: { delay: 0 } }}
										transition={{
											duration: 0.05,
											delay: delay + 0.2 * idx + 0.25
										}}
										className="font-bold">
										{shortenText(path.toUpperCase(), 20)}
									</motion.span>
								)
							}
							<Mask delay={delay + 0.2 * idx} />
						</span>
					</React.Fragment>
				);
			})}
		</nav>
	);
}

export default Breadcrumb;
