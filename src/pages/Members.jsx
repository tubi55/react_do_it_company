import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Thumbnail from "../components/Thumbnail";
import Line from "../components/Line";
import Mask from "../components/Mask";
import MotionTextEl from "../components/MotionTextEl";
import { memberInfo } from "../assets/data";
import { motion } from "framer-motion";

function Members() {
	const delay = 1.8;
	return (
		<Layout title={"MEMBERS"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						beatae.
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
				{/* CEO */}
				<article className="flex flex-wrap justify-between">
					{/* CEO info */}
					<div className="w-[60%] text-right pr-20 pt-40 max_lg:pt-0 max_sm:w-full max_sm:text-left max_sm:pr-0">
						<MotionTextEl
							el={"h3"}
							delay={2.5}
							className="pr-1 text-lg tracking-widest opacity-70">
							CEO
						</MotionTextEl>
						<br />
						<MotionTextEl el={"h4"} delay={2.7} className="text-4xl">
							DAVID, CHOI
						</MotionTextEl>

						<div className="w-[50%] py-10 flex flex-wrap justify-end max_lg:w-full max_sm:justify-start">
							<Line className="mb-8 w-[70%] h-[2px]" delay={3} />
							<motion.p
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -100, opacity: 0, transition: { delay: 0 } }}
								transition={{ duration: 1, delay: 2.8 }}>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
								architecto.
								<br />
								<br /> Quisquam laboriosam officiis amet temporibus alias
								mollitia quas voluptate, animi error repudiandae fuga impedit
								deleniti, ullam adipisci ipsa voluptate, animi
							</motion.p>
						</div>
					</div>

					{/* CEO pic */}
					<div className="w-[40%] h-[40vmax] -translate-y-[20%] max_lg:translate-y-[0%] max_sm:w-full max_sm:h-[60vw]">
						<Thumbnail className="size-full" src={"/david.jpg"} />
					</div>
				</article>

				{/* Team */}
				<article className="flex flex-wrap justify-between mt-36">
					{/* title & intro */}
					<h3 className="w-full mb-4 text-4xl font-bold font-raleway">
						Our Team Members
					</h3>
					<p className="text-lg opacity-50 mb-14">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
						provident nulla quod expedita ipsum fugit unde sapiente facilis
						quidem nihil. Modi sed quae quia repudiandae. Atque necessitatibus
						fugiat cupiditate magni?
					</p>

					{/* team list */}
					<ul className="w-[60%] flex flex-wrap justify-between mt-10 max_lg:w-full">
						{memberInfo.map(({ name, pic, position }, idx) => (
							<li key={idx} className="w-[28%] h-[15vmax] mb-40 max_sm:w-[45%]">
								<Thumbnail src={"/" + pic} className="opacity-80 " />
								<div className="relative mt-6">
									<h2 className="text-xl font-semibold">{name}</h2>
									<p className="text-sm tracking-wide mb-7 text-black/60">
										{position}
									</p>
								</div>
							</li>
						))}
					</ul>

					{/* team content */}
					<div className="w-[26%] content-center max_lg:w-full max_lg:mb-20">
						<h3 className="mb-4 text-xl font-bold font-raleway">
							Lorem ipsum dolor sit.
						</h3>
						<Line className="mb-8 w-[20%] h-[2px]" delay={3} />
						<p className="text-sm text-justify opacity-70">
							Lorem, ipsum dolor sit amet cons ectetur adipisi cing elit. Esse,
							arch itecto fyhsrg.
							<br />
							<br /> Quisq uam labor iosam offi ciis amet tem por ibus alias mol
							litia quas volup tate, animi error re pudi andae fuga impe dit
							dele niti, ullam ad ipisci ipsa volu ptate, animi pudi andae fuga
							impe dit dele niti, ullam ad ipisci ipsa volu ptate, animi
						</p>
					</div>
				</article>
			</Content>
		</Layout>
	);
}
export default Members;
