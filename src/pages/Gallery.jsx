import { useState, useEffect, useRef } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import { LuSearch } from "react-icons/lu";
import Modal from "../components/Modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
//npm install react-responsive-masonry --save

function Gallery() {
	const delay = 1.4;
	const myID = "197119297@N02";
	const [Pics, setPics] = useState([]);
	let [IsUser, setIsUser] = useState(myID);
	let [CurrentType, setCurrentType] = useState("mine");
	let [IsOpen, setIsOpen] = useState(false);
	const [Index, setIndex] = useState(0);
	const ref_btnSet = useRef(null);
	const ref_frame = useRef(null);
	const ref_input = useRef(null);

	const fetchFlickr = async opt => {
		const baseURL = "https://www.flickr.com/services/rest/?format=json&nojsoncallback=1";
		const key = import.meta.env.VITE_FLICKR_KEY;
		const num = 40;
		let url = "";

		const method_user = "flickr.people.getPhotos";
		const method_interest = "flickr.interestingness.getList";
		const method_search = "flickr.photos.search";

		const url_interest = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
		const url_user = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${opt.id}`;
		const url_search = `${baseURL}&api_key=${key}&method=${method_search}&per_page=${num}&tags=${opt.keyword}`;

		opt.type === "user" && (url = url_user);
		opt.type === "interest" && (url = url_interest);
		opt.type === "search" && (url = url_search);

		const data = await fetch(url);
		const json = await data.json();
		if (json.photos.photo.length === 0) {
			const [btnMine, btnInterest] = ref_btnSet.current.querySelectorAll("button");
			CurrentType === "interest" && btnInterest.classList.add("on");
			CurrentType === "mine" && btnMine.classList.add("on");
			return alert("해당 검색어의 결과값이 없습니다.");
		}
		setPics(json.photos.photo);
	};

	const activateBtn = e => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		const btns = ref_btnSet.current.querySelectorAll("button");
		btns.forEach(btn => btn.classList.remove("on"));
		if (e.target.nodeName === "BUTTON") e.target.classList.add("on");
		ref_frame.current.classList.remove("on");
		setTimeout(() => {
			ref_frame.current.classList.add("on");
		}, 1000);
	};

	const handleInterest = e => {
		if (e.target.classList.contains("on")) return;
		//inertestGallery함수가 호출시 IsUser값을 빈문자열 처리 (falsy)
		setIsUser("");
		activateBtn(e);
		fetchFlickr({ type: "interest" });
		setCurrentType("interest");
	};

	const handleMine = e => {
		//마이갤러리 함수 호출시에는 IsUser의 문자값이 담겨있더라도 내아이디값이랑 똑같지 않으면 핸들러 호출함
		//다른 사용자 갤러리를 갔다가 My Gallery 함수 호출시 이미 IsUser값이 담겨있기 때문에 해당 함수가 호출되지 않는 문제 해결위함
		if (e.target.classList.contains("on") || IsUser === myID) return;
		setIsUser(myID);
		activateBtn(e);
		fetchFlickr({ type: "user", id: myID });
		setCurrentType("mine");
	};

	const handleUser = e => {
		//IsUser값이 있기만 하면 핸들러함수 호출 중지
		if (IsUser) return;
		setIsUser(e.target.innerText);
		activateBtn(e);
		fetchFlickr({ type: "user", id: e.target.innerText });
		setCurrentType("user");
	};

	const handleSubmit = e => {
		e.preventDefault();
		const tags = ref_input.current.value;
		ref_input.current.value = "";
		if (!tags.trim()) return;
		setIsUser("");
		activateBtn(e);
		fetchFlickr({ type: "search", keyword: tags });
		setCurrentType("search");
	};

	const handleModal = idx => {
		console.log("handleModal", idx);
		//Modal안의 컨텐츠를 출력하기 위한 State
		setIsOpen(true);
		//클릭한 썸네일의 순번값을 전달하기 위한 State
		setIndex(idx);
	};

	useEffect(() => {
		fetchFlickr({ type: "user", id: myID });
		setTimeout(() => {
			ref_frame.current.classList.add("on");
		}, 2000);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			ref_frame.current.classList.add("on");
		}, 2000);
	}, [Pics]);

	return (
		<>
			<Layout title={"GALLERY"}>
				<Intro>
					<div className="mframe">
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { delay: 0 } }}
							transition={{ duration: 0.05, delay: delay + 0.25 }}>
							Dolor sit lorem ipsum dolor sit amet Aspe riores ipsum dolor sit amet consec, beatae ipsum dolor.
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

				<Content>
					{/* control bar */}
					<article className="flex flex-wrap justify-between px-5 py-4 mb-10">
						{/* gallery type button */}
						<nav className="w-[40%] flex gap-7 max_md:w-full max_md:mb-8" ref={ref_btnSet}>
							<button className="btn_line on" onClick={handleMine}>
								My Gallery
							</button>
							<button className="btn_line" onClick={handleInterest}>
								Interest Gallery
							</button>
						</nav>

						{/* serach form */}
						<form onSubmit={handleSubmit} className="relative flex items-center gap-2 max_sm:w-full">
							<input
								type="text"
								placeholder="Search Keyword"
								ref={ref_input}
								className="bg-transparent w-[200px] border-b border-black/50 px-2 py-2 pr-6 outline-none max_sm:w-full"
							/>
							<button className="absolute right-0 bg-transparent border-none cursor-pointer bottom-4 max_sm:bottom-2">
								<LuSearch fontSize={20} color={"#555"} />
							</button>
						</form>
					</article>

					{/* gallery list frame */}
					<div ref={ref_frame} className="w-full transition opacity-0 translate-y-24 [&.on]:opacity-100 [&.on]:translate-y-0">
						{/* Masonry */}
						<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 780: 2, 1000: 3, 1500: 4 }}>
							<Masonry gutter="40px">
								{Pics.map((pic, idx) => {
									return (
										<article key={idx} className="w-full mb-5 cursor-pointer">
											<Thumbnail
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
												className="w-full mb-1 [&_img:first-child]:opacity-70"
												h_auto={true}
												onClick={() => handleModal(idx)}
											/>

											<h2 className="my-5 font-lg">{pic.title}</h2>

											{/* profile Box */}
											<div className="flex items-end w-full gap-3 pb-3 border-b border-black/40">
												<img
													className="w-10"
													src={`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`}
													alt={pic.owner}
													onError={e => e.target.setAttribute("src", "https://www.flickr.com/images/buddyicon.gif")}
												/>
												<span className="transition cursor-pointer hover:text-sky-600" onClick={handleUser}>
													{pic.owner}
												</span>
											</div>
										</article>
									);
								})}
							</Masonry>
						</ResponsiveMasonry>
					</div>
				</Content>
			</Layout>

			<Modal IsOpen={IsOpen} setIsOpen={setIsOpen}>
				{Pics[Index] && <img src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`} alt="pic" />}
			</Modal>
		</>
	);
}

export default Gallery;
