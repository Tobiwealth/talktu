import CTAButton from "./CTAButton";

export default function TopFeaturesSection() {
	return (
		<div className="bg-retro_blue-100 gap-8 flex flex-col items-center md:p-4 lg:p-8 rounded-[20px]">
			<div className="space-y-8">
				<h2 className="text-deep_blue text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-[120%]">
					With talktu Learning plan,
					<br /> you get unlimited access to
				</h2>
				<div className="grid md:grid-cols-2 grid-rows-2 gap-4 lg:gap-8 grid-cols-1 ">
					{[...Array(4).fill("")].map((_, index) => (
						<div
							key={index}
							className="bg-white p-4 flex gap-3 items-center rounded-[15px] max-w-[450px] md:max-w-none"
						>
							<div className="bg-neutral-200 w-[40%] lg:w-[45%] h-[113px] rounded-[13px] animate-pulse aspect-[22/19] md:aspect-auto"></div>
							<p className="flex-1 font-semibold text-black text-sm sm:text-base">
								A lot of money on different educational
								materials and schools for your kid
							</p>
						</div>
					))}
				</div>
			</div>
			<CTAButton />
		</div>
	);
}