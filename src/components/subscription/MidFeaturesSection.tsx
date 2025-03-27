import CTAButton from "./CTAButton";
import Image from 'next/image'

export default function MidFeaturesSection() {
	const images = [
	    "/images/subdowncover1.svg", "/images/subdowncover2.svg", 
	]
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
							<p className="text-base font-bold text-black md:text-lg lg:text-xl">
								Money on different educational materials and
								schools for your kid
							</p>
							<div className="bg-retro_blue-300 flex justify-center items-center overflow-hidden h-[252px] rounded-[13px] animate-pulse">
								<Image
									src={images[index]}
									width={280}
									height={180}
									alt="subscription cover"
									className={index === 1 ? "p-4": ""}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<CTAButton handleClick={() => console.log("yes")} />
		</div>
	);
}
