import Hero from "../components/Hero";
import Mask from "../components/Mask";
import { useEffect } from "react";

function Home() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<>
			<Hero />
			<Mask duration={0.7} />
		</>
	);
}

export default Home;
