"use client";
import Image from "next/image";
import MaskText from "./_components/animated components/MaskText";
import FadeUp from "./_components/animated components/FadeUp";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CTAButton from "./_components/CTAButton";

export default function WhyTalktuSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
	});

	return (
		<section className="px-4 py-[106px] bg-[#EBF9FF]">
			<div className="container space-y-14 md:space-y-[89px]">
				<div className="flex flex-col items-center text-center">
					<MaskText
						phrases={["WHY TALKTU?"]}
						tag="p"
						className="font-bold font-nunitosans text-[#4E5F76] lg:text-lg xl:text-2xl"
					/>
					<FadeUp delay={0.1} className="md:hidden">
						<h2 className="font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem] !leading-[120%] mb-8 mt-2 max-w-[450px] md:max-w-[700px] lg:max-w-[850px]">
							Supportive, engaging platform for children to
							develop crucial speech and language skills
						</h2>
					</FadeUp>
					<div className="mb-8 mt-2 max-w-[450px] md:max-w-[700px] lg:max-w-[850px] hidden md:block">
						<MaskText
							phrases={[
								"Supportive, engaging platform for children to",
								"develop crucial speech and language skills",
							]}
							tag="h2"
							className="font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem] !leading-[120%]"
						/>
					</div>
					<FadeUp delay={0.2} className="w-full justify-center flex">
						<CTAButton />
					</FadeUp>
				</div>
				<div className="bg-[#D6EDF6] px-4 py-14  md:px-8 md:pb-14 md:pt-20 lg:py-[100px] xl:py-[112px] rounded-3xl md:rounded-[47px] overflow-hidden">
					<div className=" flex flex-col items-center md:grid md:grid-cols-2 max-w-[704px] mx-auto lg:max-w-none lg:flex lg:flex-row xl:w-fit">
						<motion.div
							ref={ref}
							initial={{ y: 800, rotate: -4 }}
							animate={{ y: 0, rotate: -4 }}
							transition={{
								type: "tween",
							}}
							className="bg-[#F8C741] flex flex-col rounded-[18px] text-deep_blue min-h-[300px] pt-8 relative overflow-hidden max-w-[376px] lg:max-w-[414px] -rotate-[4deg] px-4 md:px-6 lg:flex-1 lg:-rotate-[4.26deg] lg:min-h-[400px] lg:pt-12 xl:min-h-[456px] xl:px-[38px] hover:rotate-0 transition-all ease-in-out duration-150"
						>
							<div className="relative z-20 space-y-4">
								<div className="text-xl font-bold lg:text-2xl xl:text-[2rem] xl:leading-[2.5rem]">
									Affordable Access to Exceptional Speech
									Therapy
								</div>
								<p className="lg:text-xl xl:text-2xl">
									With Talktu, we make high-quality speech
									therapy attainable for children by offering
									affordable, personalized online activities
									curated by specialists
								</p>
							</div>
							<Image
								src={"/images/card-bg-1.svg"}
								alt="illustration"
								width={100}
								height={100}
								className="w-full absolute -top-[10.56rem] -right-[6.25rem] lg:-top-[6.56rem] lg:-right-[6.25rem] xl:w-[370px] xl:-top-[6.56rem] xl:-right-[8.5rem]"
							/>
							<Image
								src={"/images/card-bg-1.svg"}
								alt="illustration"
								width={100}
								height={100}
								className="absolute top-0 w-full lg:left-0"
							/>
							<Image
								src={"/images/card-bg-1.svg"}
								alt="illustration"
								width={100}
								height={100}
								className="w-full absolute -bottom-[13.56rem] -left-[6.56rem] lg:-bottom-[6.56rem] lg:-left-[6.25rem] xl:w-[300px] xl:-bottom-[5.56rem] xl:-left-[4.25rem]"
							/>
						</motion.div>
						<motion.div
							ref={ref}
							initial={{ y: 800, rotate: 4 }}
							animate={{ y: 0, rotate: 4 }}
							transition={{
								type: "tween",
							}}
							className="bg-[#3C7AEF] flex flex-col rounded-[18px] text-deep_blue min-h-[300px] pt-8 relative overflow-hidden max-w-[376px] lg:max-w-[414px] text-white rotate-[4deg] px-4 md:px-6 lg:flex-1 lg:min-h-[400px] lg:pt-12 xl:min-h-[456px] xl:px-[38px] hover:rotate-0 transition-all ease-in-out duration-150"
						>
							<div className="relative z-20 space-y-4">
								<div className="text-xl font-bold lg:text-2xl xl:text-[2rem] xl:leading-[2.5rem]">
									Expert-Curated Resources & Self-Led
									Activities
								</div>
								<p className="lg:text-xl xl:text-2xl opacity-[94%]">
									You can access high-quality, pre-recorded
									resources curated by board-certified Speech
									and Language Therapists, to guide your child
									through self-led activities at their own
									pace.
								</p>
							</div>
							<Image
								src={"/images/card-bg-2.svg"}
								alt="illustration"
								width={100}
								height={100}
								className="absolute top-0 w-full lg:h-full"
							/>
						</motion.div>
						<motion.div
							ref={ref}
							initial={{ y: 800, rotate: -2.46 }}
							animate={{ y: 0, rotate: -2.46 }}
							transition={{
								type: "tween",
							}}
							className="bg-[#43CCFF] flex flex-col rounded-[18px] text-deep_blue min-h-[300px] pt-8 relative overflow-hidden max-w-[376px] lg:max-w-[414px] rotate-[-4deg] md:rotate-[2deg] md:translate-x-1/2 md:-translate-y-5 px-4 md:px-6 lg:translate-x-0 lg:translate-y-0 lg:flex-1 lg:-rotate-[2.46deg] lg:min-h-[400px] lg:pt-12 xl:min-h-[456px] xl:px-[38px] hover:rotate-0 transition-all ease-in-out duration-150"
						>
							<div className="relative z-20 space-y-4">
								<div className="text-xl font-bold lg:text-2xl xl:text-[2rem] xl:leading-[2.5rem]">
									Convenient, Anywhere Access to Therapy
								</div>
								<p className="lg:text-xl xl:text-2xl opacity-[94%]">
									Talktu lets children take sessions from the
									comfort of their homes or any location,
									easily fitting their sessions to their daily
									routines.
								</p>
							</div>
							<Image
								src={"/images/card-bg-3.svg"}
								alt="illustration"
								width={100}
								height={100}
								className="w-full absolute -top-[10.56rem] -right-[6.25rem] lg:-top-[6.56rem] lg:-right-[6.25rem] xl:w-[370px] xl:-top-[6.56rem] xl:-right-[8.5rem]"
							/>
							<Image
								src={"/images/card-bg-3.svg"}
								alt="illustration"
								width={100}
								height={100}
								className="absolute top-0 w-full lg:left-0"
							/>
							<Image
								src={"/images/card-bg-3.svg"}
								alt="illustration"
								width={100}
								height={100}
								className="w-full absolute -bottom-[13.56rem] -left-[6.56rem] lg:-bottom-[6.56rem] lg:-left-[6.25rem] xl:w-[300px] xl:-bottom-[5.56rem] xl:-left-[4.25rem]"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
