import { Link } from "react-router-dom";
import { FaFacebookF, FaEnvelope, FaFlickr } from "react-icons/fa";
import clsx from "clsx";

function Utils({ isMobile = false }) {
	const data = [
		{ ico: FaFacebookF, url: "https://www.facebook.com" },
		{ ico: FaEnvelope, url: "https://www.google.com" },
		{ ico: FaFlickr, url: "https://www.flickr.com" }
	];

	const webStyle = "flex gap-6 text-sm max_2xl:hidden";
	const mobileStyle = "flex gap-5 mt-16";

	return (
		<ul className={clsx(isMobile ? mobileStyle : webStyle)}>
			{data.map((el, idx) => (
				<li key={idx}>
					<Link to={el.url}>
						<el.ico />
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Utils;
