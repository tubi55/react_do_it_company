//npm i tailwind-merge
//쓰는 이유, 부모의 props로 className을 전달받아 합치는 경우 기존엔 문제발생
//뒤에 붙은 추후에 붙은 className을 덮어쓰는 것이 아닌 이미 기존의 적용된 스타일을 먼저 처리하기 때문
//twMerge(기존 클래스, 덮어쓸 클래스)
import { twMerge } from "tailwind-merge";

function Thumbnail({ src = "", text = "alt text", shadow = true, className }) {
	return (
		<figure className={twMerge("size-full transition-all relative", className)}>
			{shadow && (
				<img
					className={"translate-x-2 translate-y-2 pic blur-md"}
					src={src}
					alt={text}
				/>
			)}
			<img className="pic" src={src} alt={text} />
		</figure>
	);
}

export default Thumbnail;
