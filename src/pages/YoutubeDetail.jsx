import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import { motion } from "framer-motion";
import Mask from "../components/Mask";
import Content from "../components/Content";
import { useState, useEffect } from "react";
import MotionBox from "../components/MotionBox";
import { useCustomText } from "../hooks/useText";

function YoutubeDetail() {
	const { id } = useParams();
	const delay = 0.8;
	const api_key = "AIzaSyDC60bIIkAJFzy7ji4a0Eo3AX6tYudhe1w";
	const [Data, setData] = useState(null);
	const [Statistic, setStatistic] = useState(null);
	const changeText = useCustomText("combined");

	useEffect(() => {
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;

		fetch(baseURL)
			.then(data => data.json())
			.then(json => {
				console.log(json.items[0]);
				setData(json.items[0]);
			});
	}, []);

	//vid statistics data fetching
	useEffect(() => {
		const req_vid = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${Data?.snippet.resourceId.videoId}&key=${api_key}`;
		fetch(req_vid)
			.then(data => data.json())
			.then(json => {
				setStatistic(json.items[0]?.statistics);
			});
	}, [Data]);

	return (
		<Layout title={Data?.snippet.title}>
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
				<MotionBox delay={1.8} className="w-full h-[70vh]">
					<iframe width="100%" height="100%" title="youtube" src={`https://www.youtube.com/embed/${Data?.snippet.resourceId.videoId}`}></iframe>
				</MotionBox>

				<div className="flex flex-wrap justify-between py-20">
					{/* description */}
					<article className="w-[70%] max_lg:w-full max_lg:mb-20">
						<h3 className="mb-10 text-3xl font-orbitron">Description</h3>
						<p className="pr-20 text-sm border-r border-black/20 max_lg:pr-0 max_lg:border-r-0">{Data?.snippet.description}</p>
					</article>

					{/* stastics */}
					<article className="w-[29%] pl-14 max_lg:w-full max_lg:pl-0">
						<h3 className="w-full mb-10 text-3xl font-orbitron ">Video Info</h3>

						<ul className="w-full [&_strong]:font-orbitron [&_strong]:font-semibold [&_strong]:text-xl [&_strong]:text-black/80 [&_strong]:tracking-wider [&>li]:mb-10 max_lg:flex max_lg:flex-wrap max_lg:justify-between max_sm:[&>li]:w-[47%]">
							<li>
								<div>DATE : </div>
								<strong>{changeText(Data ? Data.snippet.publishedAt.split("T")[0] : "", ".")}</strong>
							</li>
							<li>
								<div>LIKE : </div>
								<strong>{Statistic?.likeCount}</strong>
							</li>
							<li>
								<div>COMMENT : </div>
								<strong>{Statistic?.commentCount}</strong>
							</li>
							<li>
								<div>VIEW : </div>
								<strong>{Statistic?.viewCount}</strong>
							</li>
						</ul>
					</article>
				</div>
			</Content>
		</Layout>
	);
}

export default YoutubeDetail;
