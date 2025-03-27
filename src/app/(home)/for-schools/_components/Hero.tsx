import React from "react";
import CTAButton from "../../_components/CTAButton";
import FadeUp from "../../_components/animated components/FadeUp";
import MaskText from "../../_components/animated components/MaskText";

export default function Hero() {
	return (
		<section className="mt-[70px] md:mt-[98px] text-white h-screen overflow-hidden flex items-center bg-deep_blue bg-cover bg-no-repeat bg-center relative">
			{/* <div className="bg-black/[0.49] absolute inset-0 z-10"></div> */}
			<div className="container px-4 mx-auto relative z-20">
				<div className="flex flex-col gap-8 mx-auto sm:items-center sm:gap-5 sm:text-center">
					<div>
						<FadeUp delay={0.1} className="md:hidden">
							<h1 className="text-4xl font-bold font-nunito sm:text-5xl !leading-[120%]">
								All the tools you need to make learning fun and
								engaging
							</h1>
						</FadeUp>
						<MaskText
							phrases={[
								"All the tools you need to make",
								"learning fun and engaging",
							]}
							tag="h1"
							className="text-4xl font-bold font-nunito sm:text-5xl lg:text-6xl !leading-[120%] xl:text-[4rem] hidden md:block"
						/>
					</div>
					<FadeUp delay={0.4}>
						<p className="max-w-lg text-lg font-nunitosans sm:mx-auto lg:text-xl md:max-w-2xl sm:mb-4">
							Make therapy fun and impactful with Talktu’s tools.
							Designed for Schools, our platform empowers children
							to build communication skills through engaging and
							interactive activities.
						</p>
					</FadeUp>
					<FadeUp
						delay={0.5}
						className="flex w-full sm:justify-center"
					>
						<CTAButton href="/auth/signup?user=school" />
					</FadeUp>
				</div>
			</div>
		</section>
	);
}
