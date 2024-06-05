import { useEffect, useState } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";

function Youtube() {
	console.log("youtube");
	const api_key = "AIzaSyDC60bIIkAJFzy7ji4a0Eo3AX6tYudhe1w";
	const delay = 1.8;
	const [Lists, setLists] = useState([]);
	const [Statistic, setStatistic] = useState(null);
	//혹 크롬 콘솔창에서 코드 라인 번호가 다르게 출력시 크롬 개발자도구 환결창 열어서 소스맵 사용 체크 확인
	//console.log(Lists);
	//console.log(Statistic);

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
				<article className="border border-black">
					{/* 첫 렌더링 시 Vids배열 자체가 비어있으므로 없는 객체값을 호출시 오류 발생: optional chaining으로 해결 */}
					<h2>{Lists[0]?.snippet.title}</h2>
					<p>{Lists[0]?.snippet.description}</p>
					<Thumbnail
						src={Lists[0]?.snippet.thumbnails.standard.url}
						shadow={false}
						className="h-40 w-80"
					/>
					<span>
						{Lists[0]?.snippet.publishedAt.split("T")[0].split("-").join(".")}
					</span>

					<ul>
						<li>View: {Statistic?.viewCount}</li>
						<li>Like: {Statistic?.likeCount}</li>
						<li>Comment: {Statistic?.commentCount}</li>
					</ul>
				</article>

				{Lists.slice(1).map((data, idx) => {
					return (
						<article key={idx}>
							<h2 className="font-bold">{data.snippet.title}</h2>
							<p>{data.snippet.description}</p>

							<Thumbnail
								src={data.snippet.thumbnails.standard.url}
								shadow={false}
								className="h-40 w-80"
							/>
							<span>
								{data.snippet.publishedAt.split("T")[0].split("-").join(".")}
							</span>
						</article>
					);
				})}
			</Content>
		</Layout>
	);
}

export default Youtube;
