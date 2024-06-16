import { twMerge } from "tailwind-merge";

function Thumbnail({ src = "", text = "alt text", shadow = true, className, h_auto = false, onClick = null }) {
	return (
		<figure className={twMerge("size-full transition-all relative", className)} onClick={onClick}>
			{shadow && <img className={twMerge("translate-x-2 translate-y-2 pic blur-md z-400", h_auto && "!h-auto !relative")} src={src} alt={text} />}
			<img className={twMerge("pic", h_auto && "!h-auto")} src={src} alt={text} />
		</figure>
	);
}

export default Thumbnail;
