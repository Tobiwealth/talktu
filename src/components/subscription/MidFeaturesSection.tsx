import CTAButton from "./CTAButton";

export default function MidFeaturesSection() {
	return (
		<div className="bg-retro_blue-100 gap-6 flex flex-col items-center md:p-4 lg:p-8 rounded-[20px]">
			<div className="space-y-8">
				<h2 className="text-deep_blue text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-[120%]">
					You also get to save
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{[...Array(2).fill("")].map((_, index) => (
						<div
							key={index}
							className="bg-white p-6 space-y-3 rounded-[15px] max-w-[450px] md:max-w-none"
						>
							<p className="text-base md:text-lg lg:text-xl font-bold text-black">
								Money on different educational materials and
								schools for your kid
							</p>
							<div className="bg-neutral-200 h-[252px] rounded-[13px] animate-pulse"></div>
						</div>
					))}
				</div>
			</div>
			<CTAButton />
		</div>
	);
}
