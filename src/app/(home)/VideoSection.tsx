export default function VideoSection() {
	return (
		<section className="bg-neutral-100 py-[110px]">
			<div className="container flex flex-col gap-2 px-4 text-center text-deep_blue space-y-[57px]">
				<div>
					<div className="md:text-lg border border-deep_blue rounded-full w-fit mx-auto py-2 px-4 lg:text-xl lg:py-4 lg:px-5">
						Language development
					</div>
					<h2 className="mx-auto font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem] !leading-[120%] mt-3 max-w-[470px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] lg:mt-5">
						The Importance of Early Intervention by Dr. Ibraheem
						Salako PhD
					</h2>
				</div>
				<div className="bg-red-400 flex justify-center">
					{/* <iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tDctjGU7va9VjYdj"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
						className="aspect-[500/315] w-full h-auto"
					></iframe> */}
				</div>
			</div>
		</section>
	);
}
