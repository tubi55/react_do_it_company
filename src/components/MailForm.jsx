import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import MotionTextEl from "./MotionTextEl";

function MailForm() {
	const delay = 1.2;
	const form = useRef(null);

	//reset form func
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
		<article className="flex flex-wrap justify-between w-full my-24 max_lg:mb-60">
			{/* mail form */}
			<div className="w-1/2 pr-[8vw] mb-24 border-r border-black/30 max_lg:w-full max_lg:pr-0 max_lg:border-none">
				<MotionTextEl el="h2" delay={delay + 0.4} className="sub_title">
					Send E-mail
				</MotionTextEl>

				<motion.form
					ref={form}
					onSubmit={sendEmail}
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: delay + 0.8 }}>
					{/* upper name, eamil part */}
					<div className="flex justify-between w-full mb-12 [&_span]:w-[45%] ">
						<span>
							<label className="label">Name</label>
							<input type="text" name="user_name" id="nameEl" className="input" placeholder="Enter yout name" />
						</span>

						<span>
							<label className="label">Email</label>
							<input type="email" name="user_email" id="emailEl" className="input" placeholder="Enter your email " />
						</span>
					</div>

					{/* lower message part */}
					<div className="w-full mb-2">
						<label className="label">Message</label>
						<textarea name="message" id="msgEl" className="input" placeholder="Enter your message" />
					</div>

					{/* button set */}
					<div className="flex gap-5 mt-7">
						<input type="reset" value="Cancel" className="btn" />
						<input type="submit" value="Send" className="btn" />
					</div>
				</motion.form>
			</div>

			{/* info */}
			<div className="w-1/2 pl-[8vw] max_lg:w-full max_lg:pl-0 ">
				<MotionTextEl el="h2" delay={delay + 0.6} className="sub_title">
					Information
				</MotionTextEl>
				<motion.p
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: delay + 1 }}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, id nesciunt? Dolores architecto quas voluptate dolorem impedit ab dolore,
					itaque blanditiis iste esse delectus libero ipsum repudiandae porro nulla fuga.
				</motion.p>
				<br />
				<br />
				<motion.p
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 200, transition: { delay: 0 } }}
					transition={{ duration: 1, delay: delay + 1.2 }}>
					Tempora recusandae veritatis corrupti corporis facere sunt ab minima quas asperiores sed. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit.
				</motion.p>
			</div>
		</article>
	);
}

export default MailForm;
