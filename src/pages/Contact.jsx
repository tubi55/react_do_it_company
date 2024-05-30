import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Content from "../components/Content";

function Contact() {
	return (
		<Layout title={"CONTACT"}>
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
			<Content>Contact content comes here in detail.</Content>
		</Layout>
	);
}

export default Contact;
