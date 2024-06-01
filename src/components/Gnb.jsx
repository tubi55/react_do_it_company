import { Link, useLocation } from "react-router-dom";

function Gnb() {
	const menuData = [
		{ name: "MEMBERS" },
		{ name: "GALLERY" },
		{ name: "YOUTUBE" },
		{ name: "CONTACT" }
	];
	const { pathname } = useLocation();

	return (
		<ul className="flex items-center gap-20 text-sm font-semibold max_xl:gap-12 max_lg:hidden">
			{menuData.map((data, idx) => {
				return (
					<li key={idx}>
						<Link
							to={"/" + data.name.toLowerCase()}
							style={{
								color:
									data.name.toLowerCase() === pathname.substring(1)
										? "rgba(0,0,0)"
										: "rgba(0,0,0,0.5)"
							}}>
							{data.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Gnb;
