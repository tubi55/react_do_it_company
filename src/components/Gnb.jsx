import { Link, useLocation } from "react-router-dom";
import { FaUserCheck, FaImages, FaYoutube, FaMapMarkerAlt, FaFileContract, FaCommentAlt } from "react-icons/fa";
import clsx from "clsx";

function Gnb({ isMobile = false }) {
	const menuData = [
		{ name: "MEMBERS", ico: FaUserCheck },
		{ name: "POSTS", ico: FaCommentAlt },
		{ name: "GALLERY", ico: FaImages },
		{ name: "YOUTUBE", ico: FaYoutube },
		{ name: "CONTACT", ico: FaMapMarkerAlt },
		{ name: "JOIN", ico: FaFileContract }
	];
	const { pathname } = useLocation();

	const webStyle = "flex items-center gap-16 text-sm font-semibold max_xl:gap-12 max_lg:hidden";
	const mobileStyle = "flex flex-wrap w-full h-[40%]";
	const mobileListStyle =
		"w-[50%] h-[33.333%] border-t border-t-white border-b border-b-black/10 odd:border-r border-r-black/10 even:border-l border-l-white flex flex-wrap items-center justify-center ";

	return (
		<ul className={clsx(isMobile ? mobileStyle : webStyle)}>
			{menuData.map((data, idx) => {
				return (
					<li className={clsx(isMobile && mobileListStyle)} key={idx}>
						<Link
							to={"/" + data.name.toLowerCase()}
							style={{
								color: data.name.toLowerCase() === pathname.substring(1) ? "rgba(0,0,0)" : "rgba(0,0,0,0.5)"
							}}>
							{isMobile && <data.ico className="block mx-auto mb-1 text-2xl text-black/80 drop-shadow-lg" />}{" "}
							<span className="text-sm">{data.name}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Gnb;
