import { Link } from "react-router-dom";
import { FaFacebookF, FaEnvelope, FaFlickr } from "react-icons/fa";

function Utils() {
	const data = [
		{ ico: FaFacebookF, url: "https://www.facebook.com" },
		{ ico: FaEnvelope, url: "https://www.google.com" },
		{ ico: FaFlickr, url: "https://www.flickr.com" }
	];

	return (
		<ul>
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
