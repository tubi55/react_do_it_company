import { quickNavData } from "../assets/data";
import { FaPlus } from "react-icons/fa";
import Thumbnail from "./Thumbnail";
import MotionBox from "./MotionBox";

function QuickNav() {
	return (
		<nav className="absolute z-20 flex flex-wrap justify-between items-end w-[80%] bottom-14 ">
			{quickNavData.map((data, idx) => (
				<MotionBox
					key={data.id}
					className="w-[24%] max_xl:w-[48%] max_xl:mb-4 max_md:w-full"
					delay={3 + 0.3 * idx}>
					<div className="px-8 py-3 transition-all border rounded border-t-white/30 border-l-white/30 border-r-black/10 border-b-black/10 bg-white/30 backdrop-blur-md group hover:bg-white/60 hover:py-5">
						<h3 className="flex items-center justify-between text-sm font-medium tracking-widest text-black font-raleway drop-shadow-md">
							{data.title}
							<FaPlus size={12} />
						</h3>

						<Thumbnail
							className="h-0 my-0 group-hover:h-28 group-hover:my-6"
							src={"/" + data.pic}
						/>

						<div className="h-0 my-0 overflow-hidden text-xs transition-all group-hover:h-auto group-hover:my-6">
							{data.content}
						</div>

						<div className="flex justify-end">
							<button className="hidden px-4 py-2 mt-4 mb-8 text-xs rounded-none opacity-70 btn group-hover:block">
								View Detail
							</button>
						</div>
					</div>
				</MotionBox>
			))}
		</nav>
	);
}

export default QuickNav;
