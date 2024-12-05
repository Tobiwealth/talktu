"use client";
import Image from "next/image";
import FadeIn from "./_components/animated components/FadeIn";
import FadeUp from "./_components/animated components/FadeUp";
import MaskText from "./_components/animated components/MaskText";
import CTAButton from "./_components/CTAButton";
import HeroImage from "./_components/HeroImage";

export default function Hero() {
	return (
		<section className="relative bg-deep_blue pt-[130px] xl:pt-[178px] text-white md:pt-[178px] pb-[380px] min-h-screen md:min-h-[80vh] lg:min-h-screen overflow-hidden sm:pb-[420px]  md:pb-[280px] lg:pb-[320px] xl:pb-[400px] flex flex-col">
			<div className="container relative px-4 mx-auto z-20">
				<div className="flex flex-col max-w-lg gap-8 mx-auto sm:items-center sm:gap-5 sm:text-center sm:max-w-xl lg:max-w-3xl xl:max-w-4xl md:max-w-2xl">
					<div>
						<FadeUp delay={0.1} className="md:hidden">
							<h1 className="text-4xl font-bold font-nunito sm:text-5xl !leading-[120%]">
								Guide your child to start personalized online
								speech therapy now
							</h1>
						</FadeUp>
						<MaskText
							phrases={[
								"Guide your child to start",
								"personalized online speech ",
								"therapy now",
							]}
							tag="h1"
							className="text-4xl font-bold font-nunito sm:text-5xl lg:text-6xl !leading-[120%] xl:text-[4rem] hidden md:block"
						/>
					</div>
					<FadeUp delay={0.4}>
						<p className="max-w-lg text-lg font-nunitosans sm:mx-auto lg:text-xl md:max-w-xl sm:mb-4 lg:max-w-2xl xl:max-w-[43rem]">
							Talktu provides a safe, engaging environment for
							children to develop speech and language skills with
							a personalised 12-month learning journey designed by
							Speech-Language Therapists
						</p>
					</FadeUp>
					<FadeUp
						delay={0.5}
						className="w-full sm:justify-center flex"
					>
						<CTAButton />
					</FadeUp>

					<FadeIn
						delay={0.8}
						className="absolute right-10 w-[40px] md:w-[60px] bottom-10 hidden sm:block lg:right-20 lg:w-[70px] xl:w-auto xl:right-[6rem] xl:bottom-[8.5rem]"
					>
						<Image
							src={"/images/speech-bubble-blue.svg"}
							alt="speech bubble illustration"
							width={100}
							height={100}
						/>
					</FadeIn>
					<FadeIn
						delay={0.8}
						className="absolute size-3 rounded-full bg-[#F8C741] left-[5%] bottom-[10%] hidden xl:size-[19px] xl:block xl:top-[77%] xl:left-[9rem]"
					/>
					<FadeIn
						delay={0.8}
						className="absolute size-3 rounded-full bg-[#FFB6C1] right-0 top-[61%] hidden xl:size-[19px] xl:block xl:top-[35%] xl:right-[1rem] "
					/>
				</div>
			</div>
			<HeroImage />
		</section>
	);
}
