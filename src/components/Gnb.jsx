import { Link, useLocation } from "react-router-dom";
import { FaUserCheck, FaImages, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";

function Gnb({ isMobile = false }) {
	const menuData = [
		{ name: "MEMBERS", ico: FaUserCheck },
		{ name: "GALLERY", ico: FaImages },
		{ name: "YOUTUBE", ico: FaYoutube },
		{ name: "CONTACT", ico: FaMapMarkerAlt }
	];
	const { pathname } = useLocation();

	const webStyle = "flex items-center gap-20 text-sm font-semibold max_xl:gap-12 max_lg:hidden";
	const mobileStyle = "flex flex-wrap w-full";
	const mobileListStyle =
		"w-full px-10 py-7 border-t-2 border-b border-t-white/60 border-b-black/10 content-center text-black/70 font-semibold text-base";

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
							{isMobile && <data.ico className="inline-block -translate-y-[2px] mr-3" />} {data.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Gnb;
