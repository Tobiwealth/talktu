import CTAButton from "@/components/subscription/CTAButton";
import Image from "next/image";
import React from "react";
import Socials from "./_components/Socials";
import FadeUp from "./_components/animated components/FadeUp";
import MaskText from "./_components/animated components/MaskText";

export default function Footer() {
	return (
		<footer className="py-[106px] px-4">
			<div className="relative overflow-hidden container px-4 pt-20 md:pt-[112px] pb-[112px] md:pb-[135px] bg-deep_blue xl:max-w-[1252px] rounded-3xl md:rounded-[76px]">
				<div className="relative z-20 flex flex-col items-center text-center text-white gap-[44px]">
					<div className="flex flex-col items-center gap-10">
						<FadeUp>
							<Image
								src="/images/logo.svg"
								alt="logo"
								width={100}
								height={100}
								className="w-20 md:w-auto xl:w-[159px]"
							/>
						</FadeUp>
						<div className="space-y-4">
							<MaskText phrases={["Ready to Start the Journey?"]} tag="h3" className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] !leading-[120%]" />
							<FadeUp delay={0.3} className="max-w-md mx-auto md:text-lg lg:text-xl md:max-w-[26rem] lg:max-w-md text-[#F5F6F8]">
								Join us in helping your child reach new
								milestones in communication and confidence
							</FadeUp>
						</div>
						<FadeUp delay={0.4} className="w-full flex justify-center">
							<CTAButton href="/auth/signup"/>
						</FadeUp>
					</div>
					<FadeUp delay={0.5}>
						<Socials />
					</FadeUp>
				</div>
				<Image
					src="/images/quote-mark-left.svg"
					alt="quote mark"
					width={200}
					height={200}
					className="absolute -top-[10rem] sm:-top-[2rem] z-10 w-[300px] -left-[6rem] md:w-[600px] md:-top-[25rem] md:-left-[14rem] lg:w-auto lg:-top-[30rem] lg:-left-[18rem]"
				/>
				<Image
					src="/images/quote-mark-right.svg"
					alt="quote mark"
					width={200}
					height={200}
					className="absolute -bottom-8 sm:top-[5rem] z-10 w-[400px] -right-[10rem] md:w-[500px] lg:w-auto lg:-top-[19rem] lg:-right-[24rem] xl:-right-[6rem]"
				/>
			</div>
		</footer>
	);
}
