import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

function Gallery() {
	return (
		<Layout title={"GALLERY"}>
			<Intro>
				<div>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
						beatae.
					</span>
				</div>
				<div>
					<span>Dolor sit amet consectetur adipisicing elit.</span>
				</div>
			</Intro>
			<Content>Gallery content comes here in detail.</Content>
		</Layout>
	);
}

export default Gallery;
