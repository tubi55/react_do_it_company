function Hero() {
	return (
		<section className="relative flex flex-wrap items-center justify-center w-full h-screen overflow-hidden bg-white">
			{/* bg video */}
			<video
				className="absolute top-0 left-0 object-cover scale-105 opacity-60 size-full saturate-50"
				src="/vidBg.mp4"
				loop
				muted
				autoPlay
			/>
		</section>
	);
}

export default Hero;
