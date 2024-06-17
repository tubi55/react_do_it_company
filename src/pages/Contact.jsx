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

	//form mail 기능함수
	const sendEmail = e => {
		e.preventDefault();

		const nameForm = form.current.querySelector("#nameEl");
		const mailForm = form.current.querySelector("#emailEl");
		const msgForm = form.current.querySelector("#msgEl");

		if (!nameForm.value || !mailForm.value || !msgForm.value) return alert("사용자이름, 이메일주소, 문의내용은 필수 입력사항입니다.");

		console.log(import.meta.env.VITE_SERVICE_ID);

		//sendForm메서드는 각 키값을 문자열로만 인수로 전달되도록 type지정되어 있기 때문에
		//변수를 `${}`로 감싸서 문자형식으로 전달

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
				<article>
					{/* mail form */}
					<div>
						<h2>Send E-Mail</h2>
						<form ref={form} onSubmit={sendEmail}>
							{/* upper name, eamil part */}
							<div>
								<span>
									<label>Name</label>
									<input type="text" name="user_name" id="nameEl" />
								</span>

								<span>
									<label>Email</label>
									<input type="email" name="user_email" id="emailEl" />
								</span>
							</div>

							{/* lower message part */}
							<div>
								<label>Message</label>
								<textarea name="message" id="msgEl" />
							</div>

							{/* button set */}
							<div>
								<input type="reset" value="Cancel" />
								<input type="submit" value="Send" />
							</div>
						</form>
					</div>

					{/* info */}
					<div>
						<h2>Information</h2>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, id nesciunt? Dolores architecto quas voluptate dolorem impedit ab dolore,
						itaque blanditiis iste esse delectus libero ipsum repudiandae porro nulla fuga.
					</div>
				</article>
			</Content>
		</Layout>
	);
}

export default Contact;
