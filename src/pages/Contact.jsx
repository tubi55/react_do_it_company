import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Content from "../components/Content";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

//npm install @emailjs/browser --save

function Contact() {
	const delay = 1.2;
	const form = useRef(null);

	const resetForm = () => {
		const nameForm = form.current.querySelector("#nameEl");
		const mailForm = form.current.querySelector("#emailEl");
		const msgForm = form.current.querySelector("#msgEl");
		nameForm.value = "";
		mailForm.value = "";
		msgForm.value = "";
	};

	//form mail func
	const sendEmail = e => {
		e.preventDefault();
		const nameForm = form.current.querySelector("#nameEl");
		const mailForm = form.current.querySelector("#emailEl");
		const msgForm = form.current.querySelector("#msgEl");

		if (!nameForm.value || !mailForm.value || !msgForm.value) return alert("사용자이름, 이메일주소, 문의내용은 필수 입력사항입니다.");

		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
				publicKey: import.meta.env.VITE_PUBLIC_KEY
			})
			.then(
				result => {
					alert("문의내용이 메일로 발송되었습니다.");
					console.log(result);
					resetForm();
				},
				error => {
					alert("문의내용 전송에 실패했습니다.");
					console.log(error);
					resetForm();
				}
			);
	};

	return (
		<Layout title={"CONTACT"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, beatae.
					</motion.span>
					<Mask delay={delay} />
				</div>
				<br />
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 + 0.2 }}>
						Dolor sit amet consectetur adipisicing elit.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				{/* upper box */}
				<article className="flex flex-wrap justify-between w-full my-24">
					{/* mail form */}
					<div className="w-1/2 pr-[8vw] mb-24 border-r border-black/30 max_lg:w-full max_lg:pr-0 max_lg:border-none">
						<h2 className="sub_title">Send E-mail</h2>

						<form ref={form} onSubmit={sendEmail}>
							{/* upper name, eamil part */}
							<div className="flex justify-between w-full mb-12 [&_span]:w-[45%] ">
								<span>
									<label className="label">Name</label>
									<input type="text" name="user_name" id="nameEl" className="input" />
								</span>

								<span>
									<label className="label">Email</label>
									<input type="email" name="user_email" id="emailEl" className="input" />
								</span>
							</div>

							{/* lower message part */}
							<div className="w-full mb-2">
								<label className="label">Message</label>
								<textarea name="message" id="msgEl" className="input" />
							</div>

							{/* button set */}
							<div className="flex gap-5 mt-7">
								<input type="reset" value="Cancel" className="btn" />
								<input type="submit" value="Send" className="btn" />
							</div>
						</form>
					</div>

					{/* info */}
					<div className="w-1/2 pl-[8vw] max_lg:w-full max_lg:pl-0 ">
						<h2 className="sub_title">Information</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, id nesciunt? Dolores architecto quas voluptate dolorem impedit ab
							dolore, itaque blanditiis iste esse delectus libero ipsum repudiandae porro nulla fuga.
						</p>
						<br />
						<br />
						<p>
							Tempora recusandae veritatis corrupti corporis facere sunt ab minima quas asperiores sed. Lorem ipsum, dolor sit amet consectetur
							adipisicing elit.
						</p>
					</div>
				</article>
			</Content>
		</Layout>
	);
}

export default Contact;
