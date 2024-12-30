import FadeUp from "./_components/animated components/FadeUp";
import MaskText from "./_components/animated components/MaskText";

export default function VideoSection() {
	return (
		<section className="bg-neutral-100 py-[110px]">
			<div className="container flex flex-col gap-2 px-4 text-center text-deep_blue space-y-[57px]">
				<div>
					<FadeUp className="px-4 py-2 mx-auto border rounded-full md:text-lg border-deep_blue w-fit lg:text-xl lg:py-4 lg:px-5">
						Language development
					</FadeUp>
					<FadeUp delay={0.1} className="md:hidden">
						<h2 className="mx-auto font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem] !leading-[120%] mt-3 max-w-[470px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] lg:mt-5">
							The Importance of Early Intervention by Dr. Ibraheem
							Salako PhD
						</h2>
					</FadeUp>
					<div className="mx-auto hidden md:block mt-3 max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] lg:mt-5">
						<MaskText
							phrases={[
								"The Importance of Early Intervention by",
								"Dr. Ibraheem Salako PhD",
							]}
							tag="h2"
							className="font-bold text-3xl lg:text-4xl xl:text-[2.5rem] !leading-[120%]"
						/>
					</div>
				</div>
				<FadeUp delay={0.2} className="flex justify-center">
					<iframe
						width="560"
						height="315"
						className="aspect-[560/315] w-full h-auto rounded-xl lg:rounded-[35px] border-0"
						src="https://www.youtube.com/embed/WdHOJbvqNcA?si=7HUcX-gOzRUgOXog"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</FadeUp>
			</div>
		</section>
	);
}
