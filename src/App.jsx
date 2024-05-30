import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Gallery from "./pages/Gallery";
import Youtube from "./pages/Youtube";
import YoutubeDetail from "./pages/YoutubeDetail";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/members" element={<Members />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/youtube" element={<Youtube />} />
				<Route path="/youtube/:id" element={<YoutubeDetail />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
