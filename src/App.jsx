import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Gallery from "./pages/Gallery";
import Youtube from "./pages/Youtube";
import YoutubeDetail from "./pages/YoutubeDetail";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Join from "./pages/Join";
import Community from "./pages/Community";

function App() {
	const location = useLocation();

	return (
		<>
			<Header />

			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/members" element={<Members />} />
					<Route path="/posts" element={<Community />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/youtube" element={<Youtube />} />
					<Route path="/youtube/:id" element={<YoutubeDetail />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/join" element={<Join />} />
				</Routes>
			</AnimatePresence>

			<Footer />
			<Nav />
		</>
	);
}

export default App;
