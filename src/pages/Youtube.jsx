import { useEffect, useState } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import Line from "../components/Line";

function Youtube() {
	const api_key = "AIzaSyDC60bIIkAJFzy7ji4a0Eo3AX6tYudhe1w";
	const delay = 1.8;
	const [Lists, setLists] = useState([]);
	const [Statistic, setStatistic] = useState(null);

	//list data fetching
	useEffect(() => {
		const pid = "PLYOPkdUKSFgWqafuDQN9di3uLJoTV3L3W";
		const num = 10;
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
				<article className="flex flex-wrap justify-between mb-40">
					{/* Video Thumb */}
					<Thumbnail
						src={Lists[0]?.snippet.thumbnails.standard.url}
						shadow={true}
						className="w-[55%] h-[16vw] [&_img:first-child]:opacity-50"
					/>

					{/* information */}
					<div className="w-[40%] flex flex-wrap content-between">
						<ul className="flex w-full [&>*]:w-1/3 [&_span]:w-full [&_span]:text-sm [&_span]:text-black/70 [&_span]:block [&_strong]:font-orbitron [&_strong]:font-[400] [&_strong]:text-4xl ">
							<li>
								<span>Like</span>
								<strong>{Statistic?.likeCount}</strong>
							</li>
							<li>
								<span>Comment</span>
								<strong>{Statistic?.commentCount}</strong>
							</li>
							<li>
								<span>View</span>
								<strong>{Statistic?.viewCount}</strong>
							</li>
						</ul>

						<div>
							<h2 className="mb-2 text-xl font-medium leading-tight font-raleway">
								{Lists[0]?.snippet.title.length >= 100
									? Lists[0]?.snippet.title.substring(0, 100) + "..."
									: Lists[0]?.snippet.title}
							</h2>
							<Line size={"size-[5%]"} />
							<p className="mt-4 mb-4 text-xs text-black/40">
								{Lists[0]?.snippet.description.length >= 260
									? Lists[0]?.snippet.description.substring(0, 260) + "..."
									: Lists[0]?.snippet.description}
							</p>
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
				<div>
					{Lists.slice(1).map((data, idx) => {
						return (
							<article key={idx}>
								{/* Video Thumb */}
								<Thumbnail
									src={data.snippet.thumbnails.standard.url}
									shadow={false}
									className="h-40 w-80"
								/>

								{/* Video Info */}
								<div>
									<h2 className="font-bold">{data.snippet.title}</h2>
									<p>{data.snippet.description}</p>
									<span>
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
