import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import Utils from "./Utils";

function Header() {
	return (
		<header>
			<h1 className="text-2xl font-semibold drop-shadow-md">
				<Link to="/">DCODELAB</Link>
			</h1>

			<nav className="flex items-center gap-40">
				<Gnb />
				<Utils />
			</nav>
		</header>
	);
}

export default Header;
