import React from "react";
import Mask from "./Mask";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Breadcrumb() {
	const { pathname } = useLocation();
	//pathname에서 "/"를 기준으로 문자열을 분리
	//분리된 배열을 다시 반복 돌면서 처음 빈 문자열은 "HOME", 나머지는 path이름으로 출력
	//예시: "localhost:5173/members" => ["HOME", "members"]
	//예시: "localhost:5173/youtube/params" => ["HOME", "youtube", "params"];
	const arr = pathname.split("/").map(el => (el === "" ? (el = "HOME") : el));
	const delay = 1.2;

	return (
		<nav className="flex items-end gap-3 mt-3 max_md:mt-12">
			{arr.map((path, idx) => {
				return (
					// 일반 <></>에는 key값 적용이 불가
					// React객체에서 직접 Fragment컴포넌트를 호출한 뒤 key적용
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
										{path.toUpperCase()}
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
