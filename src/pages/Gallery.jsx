import { useState, useEffect } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";

function Gallery() {
	const delay = 1.8;
	const [Pics, setPics] = useState([]);

	useEffect(() => {
		const fetchFlickr = async () => {
			const baseURL = "https://www.flickr.com/services/rest/?format=json&nojsoncallback=1";
			const key = import.meta.env.VITE_FLICKR_KEY;
			const method_interest = "flickr.interestingness.getList";
			const num = 40;
			const url = `${baseURL}&api_key=${key}&method=${method_interest}&per_page=${num}`;
			const data = await fetch(url);
			const json = await data.json();
			setPics(json.photos.photo);
		};

		fetchFlickr();
	}, []);

	return (
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
				<div className="w-full ">
					{Pics.map((pic, idx) => {
						return (
							<article key={idx} className="w-[23%] mb-14 border-b border-black/40 max_2xl:w-[32%] max_lg:w-[48%] max_sm:w-[100%]">
								<Thumbnail
									src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
									className="w-full mb-1 [&_img:first-child]:opacity-50"
									h_auto={true}
								/>

								<h2 className="my-5 font-lg">{pic.title}</h2>

								<div className="flex items-end w-full gap-3 mb-3">
									<img className="w-10" src={`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`} alt={pic.owner} />
									<span>{pic.owner}</span>
								</div>
							</article>
						);
					})}
				</div>
			</Content>
		</Layout>
	);
}

export default Gallery;
