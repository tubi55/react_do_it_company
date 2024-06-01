import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Thumbnail from "../components/Thumbnail";
import Line from "../components/Line";

function Members() {
	return (
		<Layout title={"MEMBERS"}>
			<Intro>
				<div>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						beatae.
					</span>
				</div>
				<div>
					<span>Dolor sit amet consectetur adipisicing elit.</span>
				</div>
			</Intro>

			<Content>
				{/* CEO */}
				<article className="flex flex-wrap justify-between">
					{/* CEO info */}
					<div className="w-[60%] text-right pr-20 pt-40 max_lg:pt-0 max_sm:w-full max_sm:text-left max_sm:pr-0">
						<h3 className="pr-1 text-lg opacity-70">CEO</h3>

						<h4 className="text-4xl">DAVID, CHOI</h4>

						<div className="w-[50%] py-10 flex flex-wrap justify-end max_lg:w-full max_sm:justify-start">
							<Line className="mb-8 w-[70%] h-[2px]" />
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
								architecto.
								<br />
								<br /> Quisquam laboriosam officiis amet temporibus alias
								mollitia quas voluptate, animi error repudiandae fuga impedit
								deleniti, ullam adipisci ipsa voluptate, animi
							</p>
						</div>
					</div>

					{/* CEO pic */}
					<div className="w-[40%] h-[40vmax] -translate-y-[20%] max_lg:translate-y-[0%] max_sm:w-full max_sm:h-[60vw]">
						<Thumbnail className="size-full" src={"/david.jpg"} />
					</div>
				</article>
			</Content>
		</Layout>
	);
}
export default Members;
