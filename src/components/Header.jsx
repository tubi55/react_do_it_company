import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import Utils from "./Utils";

function Header() {
	return (
		<header>
			<h1>
				<Link to="/">DCODELAB</Link>
			</h1>

			<nav>
				<Gnb />
				<Utils />
			</nav>
		</header>
	);
}

export default Header;
