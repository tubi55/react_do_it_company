import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Content from "../components/Content";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState, useCallback } from "react";
import { twMerge } from "tailwind-merge";

//npm install @emailjs/browser --save

function Contact() {
	const delay = 1.2;
	const form = useRef(null);

	const { kakao } = window;
	const map = useRef(null);
	const instance = useRef(null);

	const [Index, setIndex] = useState(0);

	const info = useRef([
		{
			title: "삼성역 코엑스",
			latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
			imgSrc: "marker1.png",
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) }
		},
		{
			title: "넥슨 본사",
			latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
			imgSrc: "marker2.png",
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) }
		},
		{
			title: "서울 시청",
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			imgSrc: "marker3.png",
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) }
		}
	]);

	//지도위치를 중심으로 이동시키는 핸들러 함수 제작
	const setCenter = useCallback(() => {
		console.log("지도화면에서 마커 가운데 보정");
		// 지도 중심을 이동 시킵니다
		instance.current.setCenter(info.current[Index].latlng);
	}, [Index]);

	//reset form func
	const resetForm = () => {
		const nameForm = form.current.querySelector("#nameEl");
		const mailForm = form.current.querySelector("#emailEl");
		const msgForm = form.current.querySelector("#msgEl");
		nameForm.value = "";
		mailForm.value = "";
		msgForm.value = "";
	};

	//form mail func
	const sendEmail = e => {
		e.preventDefault();
		const nameForm = form.current.querySelector("#nameEl");
		const mailForm = form.current.querySelector("#emailEl");
		const msgForm = form.current.querySelector("#msgEl");

		if (!nameForm.value || !mailForm.value || !msgForm.value) return alert("사용자이름, 이메일주소, 문의내용은 필수 입력사항입니다.");

		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
				publicKey: import.meta.env.VITE_PUBLIC_KEY
			})
			.then(
				result => {
					alert("문의내용이 메일로 발송되었습니다.");
					console.log(result);
					resetForm();
				},
				error => {
					alert("문의내용 전송에 실패했습니다.");
					console.log(error);
					resetForm();
				}
			);
	};

	useEffect(() => {
		//위의 정보를 활용한 마커 객체 생성
		const marker = new kakao.maps.Marker({
			position: info.current[Index].latlng,
			image: new kakao.maps.MarkerImage(info.current[Index].imgSrc, info.current[Index].imgSize, info.current[Index].imgPos)
		});

		//Index값이 변경될때마다 새로운 지도 레이어가 중첩되므로
		//일단은 기존 map안의 모든 요소를 없애서 초기화
		map.current.innerHTML = "";

		//객체 정보를 활용한 지도 객체 생성
		instance.current = new kakao.maps.Map(map.current, {
			center: info.current[Index].latlng,
			level: 1
		});

		//마커 객체에 지도 객체 연결
		marker.setMap(instance.current);

		//Contact페이지에만 동작되야 되는 핸들러함수를 최상위 객체인 window에 직접 연결했기 때문에
		//라우터로 다른페이지이동하더라도 계속해서 setCenter호출되는 문제점 발생
		//해결방법: Contact 컴포넌트가 언마운트시 강제로 윈도우객체에서 setCenter핸들러를 제거
		window.addEventListener("resize", setCenter);

		return () => {
			window.removeEventListener("resize", setCenter);
		};
	}, [Index, kakao, setCenter]);

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

			<Content>
				{/* upper box */}
				<article className="flex flex-wrap justify-between w-full my-24 max_lg:mb-60">
					{/* mail form */}
					<div className="w-1/2 pr-[8vw] mb-24 border-r border-black/30 max_lg:w-full max_lg:pr-0 max_lg:border-none">
						<h2 className="sub_title">Send E-mail</h2>

						<form ref={form} onSubmit={sendEmail}>
							{/* upper name, eamil part */}
							<div className="flex justify-between w-full mb-12 [&_span]:w-[45%] ">
								<span>
									<label className="label">Name</label>
									<input type="text" name="user_name" id="nameEl" className="input" />
								</span>

								<span>
									<label className="label">Email</label>
									<input type="email" name="user_email" id="emailEl" className="input" />
								</span>
							</div>

							{/* lower message part */}
							<div className="w-full mb-2">
								<label className="label">Message</label>
								<textarea name="message" id="msgEl" className="input" />
							</div>

							{/* button set */}
							<div className="flex gap-5 mt-7">
								<input type="reset" value="Cancel" className="btn" />
								<input type="submit" value="Send" className="btn" />
							</div>
						</form>
					</div>

					{/* info */}
					<div className="w-1/2 pl-[8vw] max_lg:w-full max_lg:pl-0 ">
						<h2 className="sub_title">Information</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, id nesciunt? Dolores architecto quas voluptate dolorem impedit ab
							dolore, itaque blanditiis iste esse delectus libero ipsum repudiandae porro nulla fuga.
						</p>
						<br />
						<br />
						<p>
							Tempora recusandae veritatis corrupti corporis facere sunt ab minima quas asperiores sed. Lorem ipsum, dolor sit amet consectetur
							adipisicing elit.
						</p>
					</div>
				</article>

				{/* map box */}
				<article id="map">
					<div className="w-full h-[50vh] bg-black saturate-0 transition hover:saturate-100" ref={map}></div>

					{/* 데이터기반으로 자동 버튼 생성 및 자동 이벤트 연결 처리 */}
					<ul className="flex gap-2 mt-4 mb-40">
						{info.current.map((el, idx) => (
							<li
								className={twMerge("btn opacity-70", Index === idx && "bg-cyan-400 shadow-cyan-400/30 opacity-100")}
								key={idx}
								onClick={() => {
									setIndex(idx);
								}}>
								{el.title}
							</li>
						))}
					</ul>
				</article>
			</Content>
		</Layout>
	);
}

export default Contact;
