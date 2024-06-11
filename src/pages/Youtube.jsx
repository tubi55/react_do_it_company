import { useEffect, useState } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import Line from "../components/Line";
import MotionBox from "../components/MotionBox";
import MotionTextEl from "../components/MotionTextEl";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function Youtube() {
	const api_key = "AIzaSyDC60bIIkAJFzy7ji4a0Eo3AX6tYudhe1w";
	const delay = 1.8;
	const [Lists, setLists] = useState([]);
	const [Statistic, setStatistic] = useState(null);

	//list data fetching
	useEffect(() => {
		const pid = "PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu";
		const num = 11;
		const req_list = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

		fetch(req_list)
			.then(data => data.json())
			.then(json => {
				setLists(json.items);
			});
	}, []);

	//vid statistics data fetching
	useEffect(() => {
		const req_vid = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${Lists[0]?.snippet.resourceId.videoId}&key=${api_key}`;
		fetch(req_vid)
			.then(data => data.json())
			.then(json => {
				setStatistic(json.items[0]?.statistics);
			});
	}, [Lists]);

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

			<Content>
				{/* First Video Info */}
				<article className="flex flex-wrap justify-between mb-40 ">
					{/* Video Thumb */}
					<MotionBox
						delay={2.4}
						className="w-[55%] h-[20vw] [&_img:first-child]:opacity-50 max_xl:w-full max_xl:mb-20 max_xl:h-[40vh] max_lg:h-[30vh] max_md:h-[20vh] max_sm:h-[14vh]">
						<Thumbnail
							src={Lists[0]?.snippet.thumbnails.standard.url}
							className="size-full "
						/>
					</MotionBox>

					{/* information */}
					<div className="w-[40%] flex flex-wrap content-between max_xl:w-full">
						<ul className="flex w-full [&>*]:w-1/3 [&_strong]:font-orbitron ">
							<li>
								<MotionTextEl
									el={"span"}
									className="text-sm text-black/70"
									delay={2.6}>
									Like
								</MotionTextEl>
								<br />

								<MotionTextEl
									el={"strong"}
									className="text-4xl font-[400] max_md:text-xl"
									delay={2.8}>
									{Statistic?.likeCount}
								</MotionTextEl>
							</li>
							<li>
								<MotionTextEl
									el={"span"}
									className="text-sm text-black/70"
									delay={3.0}>
									Comment
								</MotionTextEl>
								<br />

								<MotionTextEl
									el={"strong"}
									className="text-4xl font-[400] max_md:text-xl"
									delay={3.2}>
									{Statistic?.commentCount}
								</MotionTextEl>
							</li>
							<li>
								<MotionTextEl
									el={"span"}
									className="text-sm text-black/70"
									delay={3.4}>
									View
								</MotionTextEl>
								<br />
								<MotionTextEl
									el={"strong"}
									className="text-4xl font-[400] max_md:text-xl"
									delay={3.6}>
									{Statistic?.viewCount}
								</MotionTextEl>
							</li>
						</ul>

						<div>
							<motion.h2
								className="mb-2 text-xl font-medium leading-tight font-raleway max_md:text-base max_md:mt-10"
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -100, opacity: 0, transition: { delay: 0 } }}
								transition={{ duration: 1, delay: 3.0 }}>
								{Lists[0]?.snippet.title.length >= 100
									? Lists[0]?.snippet.title.substring(0, 100) + "..."
									: Lists[0]?.snippet.title}
							</motion.h2>
							<Line size={"size-[5%]"} />
							<motion.p
								className="mt-4 mb-4 text-xs text-black/40"
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -100, opacity: 0, transition: { delay: 0 } }}
								transition={{ duration: 1, delay: 3.4 }}>
								{Lists[0]?.snippet.description.length >= 260
									? Lists[0]?.snippet.description.substring(0, 260) + "..."
									: Lists[0]?.snippet.description}
							</motion.p>
							<span className="text-xs tracking-widest font-orbitron">
								{Lists[0]?.snippet.publishedAt
									.split("T")[0]
									.split("-")
									.join(".")}
							</span>
						</div>
					</div>
				</article>

				{/* Rest Video Lists Frame */}
				<h2 className="w-full mb-8 text-4xl font-thin font-orbitron text-black/70 max_md:text-3xl">
					Youtube Video List
				</h2>
				<Line size={"size-[5%]"} className="mb-8" />
				<p className="w-[60%] mb-24 text-xl px-10 relative max_md:w-full">
					<span className="absolute top-0 left-0 font-sans text-6xl">
						&quot;
					</span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					aliquam doloribus vel suscipit modi esse quis! Debitis et accusamus
					commodi laudantium in itaque possimus beatae saepe.
					<span className="absolute bottom-0 right-0 font-sans text-6xl">
						&quot;
					</span>
				</p>

				<div className="grid grid-cols-7 gap-[3vw] max_lg:grid-cols-2 max_md:grid-cols-1">
					{Lists.slice(1).map((data, idx) => {
						return (
							<article
								key={idx}
								className={twMerge(
									"pb-10  max_lg:col-span-1 max_lg:row-span-1",
									idx === 0 || idx === 5
										? "col-span-3 row-span-2"
										: "col-span-2 "
								)}>
								{/* Video Thumb */}
								<Thumbnail
									src={data.snippet.thumbnails.standard.url}
									shadow={true}
									className={twMerge(
										"w-full [&>*:first-child]:opacity-90 mb-6 max_lg:h-[20vw] max_md:h-[40vw] ",
										idx === 0 || idx === 5 ? "h-[17vw]" : "h-[10vw]"
									)}
								/>

								{/* Video Info */}
								<div className="pb-6 border-b border-black/20">
									<h2
										className={clsx(
											"text-black/70 max_lg:text-xl max_lg:font-semibold max_lg:pt-0 max_lg:opacity-100",
											idx === 0 || idx === 5
												? "text-4xl font-thin mb-7 pt-4"
												: "text-xl font-semibold mb-3 opacity-70"
										)}>
										{data.snippet.title}
									</h2>
									<p
										className={clsx(
											"break-all mb-7 opacity-60 max_lg:text-base max_lg:pt-0",
											(idx === 0 || idx === 5) && "text-xl font-thin pt-4"
										)}>
										{data.snippet.description.length >= 200
											? data.snippet.description.substring(0, 200) + "..."
											: data.snippet.description}
									</p>
									<span className="text-sm tracking-wider font-orbitron text-sky-600">
										{data.snippet.publishedAt
											.split("T")[0]
											.split("-")
											.join(".")}
									</span>
								</div>
							</article>
						);
					})}
				</div>
			</Content>
		</Layout>
	);
}

export default Youtube;
