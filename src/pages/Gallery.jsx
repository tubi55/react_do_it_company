import { useState, useEffect } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import Thumbnail from "../components/Thumbnail";
import Masonry from "react-masonry-component";

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
				<motion.div
					className="w-full"
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ x: 100, opacity: 0, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: 2.4 }}>
					<Masonry elementType={"div"} spacing={2} options={{ transitionDuration: 0.5 }} disableImagesLoaded={false} updateOnEachImageLoad={false}>
						{Pics.map((pic, idx) => {
							return (
								<article key={idx} className="w-[25%] mb-14  max_2xl:w-[33.333%] max_lg:w-[50%] max_sm:w-[100%] px-5">
									<Thumbnail
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
										className="w-full mb-1 [&_img:first-child]:opacity-60"
										h_auto={true}
									/>

									<h2 className="my-5 font-lg">{pic.title}</h2>

									<div className="flex items-end w-full gap-3 pb-3 border-b border-black/40">
										<img className="w-10" src={`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`} alt={pic.owner} />
										<span>{pic.owner}</span>
									</div>
								</article>
							);
						})}
					</Masonry>
				</motion.div>
			</Content>
		</Layout>
	);
}

export default Gallery;
