import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

function Youtube() {
	return (
		<Layout title={"YOUTUBE"}>
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
			<Content>Youtube content comes here in detail.</Content>
		</Layout>
	);
}

export default Youtube;
