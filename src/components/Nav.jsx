import { FaBars } from "react-icons/fa";

function Nav() {
	return (
		<>
			<button className="fixed top-7 right-[5%] z-50 hidden text-xl text-black/70 max_lg:block">
				<FaBars />
			</button>
		</>
	);
}

export default Nav;
