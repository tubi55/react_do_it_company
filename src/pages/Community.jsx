import { useState, useEffect, useRef } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import MotionTextEl from "../components/MotionTextEl";
import { FaEdit, FaRegTrashAlt, FaUndo } from "react-icons/fa";

function Community() {
	const delay = 1;
	const dummyData = [
		{
			title: "title9",
			content: "Here comes content description in detail4.",
			data: new Date()
		},
		{
			title: "title8",
			content: "Here comes content description in detail4.",
			data: new Date()
		},
		{
			title: "title7",
			content: "Here comes content description in detail4.",
			data: new Date()
		},
		{
			title: "title6",
			content: "Here comes content description in detail4.",
			data: new Date()
		},
		{
			title: "title5",
			content: "Here comes content description in detail4.",
			data: new Date()
		},
		{
			title: "title4",
			content: "Here comes content description in detail4.",
			data: new Date()
		},
		{
			title: "title3",
			content: "Here comes content description in detail3.",
			data: new Date()
		},
		{
			title: "title2",
			content: "Here comes content description in detail2.",
			data: new Date()
		},
		{
			title: "title1",
			content: "Here comes content description in detail1.",
			data: new Date()
		}
	];

	useEffect(() => {}, []);

	const getLocalData = () => {
		const data = localStorage.getItem("post");
		if (data) return JSON.parse(data);
		else return dummyData;
	};

	const ref_input = useRef(null);
	const ref_textarea = useRef(null);
	const ref_editInput = useRef(null);
	const ref_editTextarea = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	const resetForm = () => {
		ref_input.current.value = "";
		ref_textarea.current.value = "";
	};

	const createPost = () => {
		if (!ref_input.current.value.trim() || !ref_textarea.current.value.trim()) {
			resetForm();
			return alert("제목과 본문을 모두 입력하세요.");
		}
		setPosts([
			{
				title: ref_input.current.value,
				content: ref_textarea.current.value,
				data: new Date()
			},
			...Posts
		]);
		resetForm();
	};

	const deletePost = delIndex => {
		if (window.confirm("정말 해당 게시글을 삭제하겠습니까?")) {
			setPosts(Posts.filter((_, idx) => delIndex !== idx));
		}
	};

	const enableUpdate = editIndex => {
		if (!Allowed) return;
		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (editIndex === idx) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = editIndex => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (editIndex === idx) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = updateIndex => {
		setPosts(
			Posts.map((post, idx) => {
				if (updateIndex === idx) {
					post.title = ref_editInput.current.value;
					post.content = ref_editTextarea.current.value;
				}
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem("post", JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout title={"COMMUNITY"}>
			<Intro>
				<div className="mframe">
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { delay: 0 } }}
						transition={{ duration: 0.05, delay: delay + 0.25 }}>
						Dolor sit lorem ipsum dolor sit amet Aspe riores ipsum dolor sit amet consec, beatae ipsum dolor.
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
						Bit ametDolor sit amet consectetur adipisicing elit ctetur adipisi.
					</motion.span>
					<Mask delay={delay + 0.2} />
				</div>
			</Intro>

			<Content>
				<div className="flex flex-wrap justify-between w-full">
					{/* input box */}
					<div className="w-[4/12] pr-32 max_xl:w-full max_xl:pr-0 max_xl:mb-28">
						<MotionTextEl el={"h2"} delay={delay + 0.4} className="mb-6 text-4xl font-thin">
							Write Post
						</MotionTextEl>
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 100, transition: { delay: 0 } }}
							transition={{ duration: 1, delay: delay + 0.6 }}>
							<input ref={ref_input} type="text" className="mb-10 input" placeholder="제목을 입력하세요." />
							<br />
							<textarea ref={ref_textarea} className="input" cols="30" rows="3" placeholder="본문을 입력하세요."></textarea>

							<nav className="flex gap-4 mt-6 btnSet">
								<button className="rounded-sm btn" onClick={resetForm}>
									cancel
								</button>
								<button className="rounded-sm btn" onClick={createPost}>
									write
								</button>
							</nav>
						</motion.div>
					</div>

					{/* show box */}
					<div className="flex flex-wrap justify-between w-8/12 mb-52 max_xl:w-full">
						<div className="w-full">
							<MotionTextEl el={"h2"} delay={delay + 0.6} className="mb-6 text-4xl font-thin">
								Post List
							</MotionTextEl>
						</div>

						{Posts.map((post, idx) => {
							const string = JSON.stringify(post.data);
							const [year, month, date] = string.split("T")[0].split('"')[1].split("-");

							if (post.enableUpdate) {
								//수정 모드 렌더링
								return (
									<article key={idx} className="flex flex-wrap card items-between">
										<div>
											<input className="text-2xl input" type="text" defaultValue={post.title} ref={ref_editInput} />
											<br />
											<textarea
												//react에서 value속성을 적용하려면 무조건 onChange이벤트 연결 필수
												//onChange이벤트 연결하지 않을때에는 value가닌 defaultValue속성 적용
												defaultValue={post.content}
												ref={ref_editTextarea}
												className="input min-h-[12vh] mt-3 text-base text-sky-500"
											/>
										</div>
										<nav className="flex items-end justify-end w-full gap-4">
											<button className="text-lg transition text-black/50 hover:text-black/90 hover:scale-150" onClick={() => disableUpdate(idx)}>
												<FaUndo />
											</button>
											<button
												className="text-xl transition text-black/50 hover:text-black/90 hover:scale-150"
												onClick={() => {
													updatePost(idx);
													disableUpdate(idx);
												}}>
												<FaEdit />
											</button>
										</nav>
									</article>
								);
							} else {
								//출력 모드 렌더링

								return (
									<motion.article
										key={idx}
										className="flex flex-wrap items-between card"
										initial={{ opacity: 0, y: 100 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 100, transition: { delay: 0 } }}
										transition={{ duration: 0.3, delay: delay + 0.6 + 0.2 * idx }}>
										<div>
											<h2 className="pb-4 mb-4 text-2xl font-thin border-b border-black/30">{post.title}</h2>
											<p className="mb-12 text-black/60">{post.content}</p>
										</div>

										<div className="flex flex-wrap items-end justify-between w-full text-sm">
											<p className="text-[11px] font-orbitron tracking-widest text-sky-500">{`${year}.${month}.${date}`}</p>

											<nav className="flex gap-3 ">
												<button onClick={() => enableUpdate(idx)} className="text-xl transition text-black/50 hover:text-black/90 hover:scale-150">
													<FaEdit />
												</button>
												<button onClick={() => deletePost(idx)} className="text-xl transition text-black/50 hover:text-black/90 hover:scale-150">
													<FaRegTrashAlt />
												</button>
											</nav>
										</div>
									</motion.article>
								);
							}
						})}
					</div>
				</div>
			</Content>
		</Layout>
	);
}

export default Community;

//아직 데이터베이스를 배우진 않았지만 CRUD기능 구현하고 싶어서 로컬저장소를 활용해서 만들어 봤다.
//이슈사항으로는 시간값을 가져왔는데 로컬저장소에 글이 저장되는 시점의 시간을 표준시로 저장을 해서 현재시간보다 9시간이 늦은 시간으로 출력되는 문제가 있었다.
//시간값을 변경하려고 보니 JSON.parse로 객체형태로 시간을 불러와져서 split 메서드를 쓸수가 없는데 이유를 몰라서 삽질했다.
//객체형태로 변환된 값을 다시 stringify로 문자화시킨다음에 split으로 문자값 가공하고 다시 화면에 출력
//두번째 이슈사항으로 친구컴퓨터로 내 작업물을 확인해보니 해당 브라우저에는 저장된 데이터가 없어서 커뮤니티 페이지가 빈화면으로 출력되는 이슈 --> 로컬저장소에 값이 없을때 더미 데이터가 출력되도록 했다.
