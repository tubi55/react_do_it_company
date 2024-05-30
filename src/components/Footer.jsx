import { FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";

function Footer() {
	return (
		<footer>
			<section>
				<article>
					<h2>Product</h2>
					<ul>
						<li>Listing</li>
						<li>Property</li>
						<li>Agents</li>
						<li>Blog</li>
					</ul>
				</article>

				<article>
					<h2>Resources</h2>
					<ul>
						<li>Our Homes</li>
						<li>Member Stories</li>
						<li>Video</li>
						<li>Free trial</li>
					</ul>
				</article>

				<article>
					<h2>Company</h2>
					<ul>
						<li>Partnerships</li>
						<li>Terms of use</li>
						<li>Privacy</li>
						<li>Sitemap</li>
					</ul>
				</article>

				<article>
					<h2>Get in touch</h2>
					<p>
						You will find any information whatever you want whereever you are.
					</p>
					<ul>
						<li>
							<FaFacebookF />
						</li>
						<li>
							<FaTwitter />
						</li>
						<li>
							<FaBehance />
						</li>
					</ul>
				</article>
			</section>

			<section>
				<h2>DCODELAB</h2>
				<p>2024 dcodelab &copy; All Rights reserved.</p>
			</section>
		</footer>
	);
}

export default Footer;
