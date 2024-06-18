import { useState, useEffect, useRef, useCallback } from "react";
import Content from "../components/Content";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import { motion } from "framer-motion";
import { useDebounce } from "../hooks/useDebounce";
import MotionTextEl from "../components/MotionTextEl";

//해당 컴포넌트에 메모리 누수 콘솔오류가 뜨는 이유 (memory leak);
//Errs스테이트에 값이 담기는 시점이 useDebounce에 의해서 0.5초 이후인데
//Members 컴포넌트 접속하자마자 0.5초안에 다른 페이지로 넘어가면
//아직 state에 값이 담기지 않았는데 unmount된 경우이므로 뜨는 오류
//컴포넌트 unmount시 값을 Mounted값을 false로 변경해주고 해당 값이 true일때에만 state변경처리
function Join() {
	const delay = 1;
	const initVal = {
		userid: "",
		pwd1: "",
		pwd2: "",
		email: "",
		gender: "",
		interests: [],
		edu: "",
		comments: ""
	};
	const ref_checkGroup = useRef(null);
	const ref_radioGroup = useRef(null);
	const ref_selGroup = useRef(null);
	const [Val, setVal] = useState(initVal);
	const [Errs, setErrs] = useState({});
	const [Mounted, setMounted] = useState(true);

	//기존의 onchange이벤트가 발생할때마다 변경되는 Val값을 useDebounce를 이용해서
	//Debouncing이 적용된 또다른 State를 전달 받음
	const DebouncedVal = useDebounce(Val);

	const resetForm = e => {
		e.preventDefault();
		setVal(initVal);
		[ref_checkGroup, ref_radioGroup].forEach(el => el.current.querySelectorAll("input").forEach(input => (input.checked = false)));
		ref_selGroup.current.value = "";
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleCheck = e => {
		const { name } = e.target;
		let checkArr = [];
		const inputs = e.target.parentElement.querySelectorAll("input");
		//checkbox요소를 반복돌면서 해당 요소가 체크되어 있다면 해당 value값을 배열에 담아주고
		//배열을 state에 담아줌
		inputs.forEach(input => input.checked && checkArr.push(input.value));
		setVal({ ...Val, [name]: checkArr });
	};

	const check = value => {
		const num = /[0-9]/;
		const txt = /[a-zA-Z]/;
		const spc = /[!@#$%^*()_]/;
		const errs = {};

		//id, interests, comments, gender, edu check
		value.userid.length < 5 && (errs.userid = "아이디는 최소 5글자 이상 입력하세요.");
		value.interests.length === 0 && (errs.interests = "관심사를 하나이상 체크해주세요.");
		value.comments.length < 10 && (errs.comments = "남기는말은 10글자 이상 입력하세요.");
		!value.gender && (errs.gender = "성별은 필수 체크항목입니다.");
		!value.edu && (errs.edu = "학력을 선택하세요.");

		//pwd check
		(value.pwd1.length < 5 || !num.test(value.pwd1) || !txt.test(value.pwd1) || !spc.test(value.pwd1)) &&
			(errs.pwd1 = "비밀번호는 5글자이상, 문자,숫자,특수문자를 모두 포함하세요");
		(value.pwd1 !== value.pwd2 || !value.pwd2) && (errs.pwd2 = "2개의 비밀번호를 같게 입력하세요.");

		//email check
		if (!value.email || !/@/.test(value.email)) {
			errs.email = "이메일은 무조건 @를 포함해야 합니다.";
		} else {
			const [forward, backward] = value.email.split("@");
			if (!forward || !backward) {
				errs.email = "이메일에 @앞뒤로 문자값이 있어야 합니다.";
			} else {
				const [forward, backward] = value.email.split(".");
				if (!forward || !backward) {
					errs.email = "이메일 . 앞뒤로 문자값이 있어야 합니다.";
				}
			}
		}

		return errs;
	};

	const handleSubmit = e => {
		e.preventDefault();
		Object.keys(check(Val)).length === 0 ? alert("인증통과") : setErrs(check(Val));
	};

	const showCheck = useCallback(() => {
		Mounted && setErrs(check(DebouncedVal));
	}, [DebouncedVal, Mounted]);

	//의존성 배열에 Debouncing이 적용된 state값을 등록해서
	//함수의 핸들러함수 호출의 빈도를 줄여줌
	//useDebounce는 state의 변경횟수 자체를 줄이는게 아니라.
	//해당 state에 따라 호출되는 함수의 빈도를 줄임[]
	useEffect(() => {
		console.log("Val state값 변경에 의해서 showCheck함수 호출");
		showCheck();
		console.log(DebouncedVal);

		return () => setMounted(false);
	}, [DebouncedVal, showCheck]);

	return (
		<Layout title={"SIGN UP"}>
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
				<form onSubmit={handleSubmit}>
					<fieldset className="flex flex-wrap justify-between w-full mt-36">
						<legend className="hidden">form for signup</legend>
						<div className="w-2/6 pr-20 text-right max_lg:w-full max_lg:mb-16 max_lg:pr-0">
							<MotionTextEl el={"h2"} delay={delay + 0.5} className="mb-4 text-4xl font-thin font-orbitron">
								JOIN OUR GROUP
							</MotionTextEl>
							<br />

							<MotionTextEl el={"div"} delay={delay + 0.7} className="text-xs tracking-wider text-black/50 font-orbitron">
								Become a part of our team!
							</MotionTextEl>
							<br />
							<MotionTextEl el={"div"} delay={delay + 0.9} className="text-xs tracking-wide text-black/50 font-orbitron">
								Be part of something amazing!
							</MotionTextEl>
						</div>

						<motion.div
							className="w-4/6 mb-48 max_lg:w-full"
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 100, transition: { delay: 0 } }}
							transition={{ duration: 1, delay: delay + 1.1 }}>
							<table border="1">
								<tbody>
									{/* userid */}
									<tr>
										<th scope="row">
											<label htmlFor="userid">Userid</label>
										</th>
										<td>
											<input type="text" id="userid" name="userid" value={Val.userid} onChange={handleChange} placeholder="아이디를 입력하세요." />
											{Errs.userid && <p>{Errs.userid}</p>}
										</td>
									</tr>

									{/* password */}
									<tr>
										<th scope="row">
											<label htmlFor="pwd1">Password</label>
										</th>
										<td>
											<input type="password" id="pwd1" name="pwd1" value={Val.pwd1} onChange={handleChange} placeholder="비밀번호를 입력하세요." />
											{Errs.pwd1 && <p>{Errs.pwd1}</p>}
										</td>
									</tr>

									{/* re password */}
									<tr>
										<th scope="row">
											<label htmlFor="pwd2">Re-Password</label>
										</th>
										<td>
											<input type="password" id="pwd2" name="pwd2" value={Val.pwd2} onChange={handleChange} placeholder="비밀번호를 재입력하세요." />
											{Errs.pwd2 && <p>{Errs.pwd2}</p>}
										</td>
									</tr>

									{/* email */}
									<tr>
										<th scope="row">
											<label htmlFor="email">E-mail</label>
										</th>
										<td>
											<input type="text" id="email" name="email" value={Val.email} onChange={handleChange} placeholder="이메일주소를 입력하세요." />
											{Errs.email && <p>{Errs.email}</p>}
										</td>
									</tr>

									{/* gender */}
									<tr>
										<th>Gender</th>
										<td ref={ref_radioGroup}>
											<label htmlFor="female">female</label>
											<input type="radio" name="gender" id="female" defaultValue="female" onChange={handleChange} />

											<label htmlFor="male">male</label>
											<input type="radio" name="gender" id="male" defaultValue="male" onChange={handleChange} />
											{Errs.gender && <p>{Errs.gender}</p>}
										</td>
									</tr>

									{/* interests */}
									<tr>
										<th>Interests</th>
										<td ref={ref_checkGroup}>
											<label htmlFor="sports">sports</label>
											<input type="checkbox" id="sports" name="interests" defaultValue="sports" onChange={handleCheck} />

											<label htmlFor="game">game</label>
											<input type="checkbox" id="game" name="interests" defaultValue="game" onChange={handleCheck} />

											<label htmlFor="music">music</label>
											<input type="checkbox" id="music" name="interests" defaultValue="music" onChange={handleCheck} />
											{Errs.interests && <p>{Errs.interests}</p>}
										</td>
									</tr>

									{/* education */}
									<tr>
										<th>
											<label htmlFor="edu">Education</label>
										</th>
										<td>
											<select name="edu" id="edu" onChange={handleChange} ref={ref_selGroup}>
												<option value="">최종학력 선택하세요</option>
												<option value="elementary-school">초등학교 졸업</option>
												<option value="middle-school">중학교 졸업</option>
												<option value="high-school">고등학교 졸업</option>
												<option value="college">대학교 졸업</option>
											</select>
											{Errs.edu && <p>{Errs.edu}</p>}
										</td>
									</tr>

									{/* comments */}
									<tr>
										<th>
											<label htmlFor="comments">Comments</label>
										</th>
										<td>
											<textarea
												name="comments"
												id="comments"
												cols="30"
												rows="3"
												value={Val.comments}
												onChange={handleChange}
												placeholder="남기는 말을 입력하세요."></textarea>
											{Errs.comments && <p>{Errs.comments}</p>}
										</td>
									</tr>

									{/* btnSet */}
									<tr>
										<th colSpan="2">
											<input type="reset" value="cancel" onClick={resetForm} />
											<input type="submit" value="send" />
										</th>
									</tr>
								</tbody>
							</table>
						</motion.div>
					</fieldset>
				</form>
			</Content>
		</Layout>
	);
}

export default Join;

/*
	react-hook-form을 쓰지 않고 직접 기능을 만들었냐?
	-- 라이브러리는 언제든지 연결할 수 있는건데, 아직 배우는 입장이기 때문에 부족하나마 어떤 인증로직이 처리되는지 직접 만들어 보고 싶었다.

	그래서 checkbox, radio, selector, textarea 같이 필수입력사항이 아닌 요소도 직접 인증구현을 해봤다.
	인증처리 하면서 제일 힘들었던 부분은 비밀번호, 이메일 인증 구현이 힘들었다

	구글링을 해보니 정규표현식의 예시코드가 많이 있었지만 아직 정규표현식을 제대로 공부한것이 아니라 모르는 상태에서 붙여넣기 식으로 구현하기는 싫어서 
	내가 알고 있는 문자열 관련 메서드를 최대한 활용해서 구현해봤다
*/
