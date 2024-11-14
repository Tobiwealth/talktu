import CTAButton from "./CTAButton";

export default function BottomFeaturesSection() {
	return (
		<div className="bg-retro_blue-100 gap-6 flex flex-col items-center md:p-4 lg:p-8 rounded-[20px]">
			<div className="space-y-8">
				<h2 className="text-deep_blue text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-[120%]">
					You also get to save
				</h2>
				<div className="grid gap-4 max-w-[404px]">
					{[...Array(6).fill("")].map((_, index) => (
						<div
							key={index}
							className="bg-white p-4 rounded-[15px] flex items-center gap-3"
						>
							<div className="w-[50px] h-[30px] font-semibold bg-retro_blue-main text-white text-center rounded-full flex justify-center items-center min-w-[31px]">
								{index + 1}
							</div>
							<p className="text-sm sm:text-base font-semibold text-black">
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
