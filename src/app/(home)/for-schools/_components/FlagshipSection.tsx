import React from "react";
import MaskText from "../../_components/animated components/MaskText";
import FadeUp from "../../_components/animated components/FadeUp";
import CTAButton from "../../_components/CTAButton";
import Image from "next/image";
import { flagshipContent } from "../../data";

export default function FlagshipSection() {
	return (
		<section
			id="about"
			className="px-4 pt-[123px] lg:px-8 pb-[157px] bg-neutral-100"
		>
			<div className="container space-y-14 md:space-y-[89px] max-w-[1202px]">
				<div className="flex flex-col items-center text-center">
					<FadeUp delay={0.1} className="md:hidden">
						<h2 className="font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem] !leading-[120%] max-w-[450px] md:max-w-[700px] lg:max-w-[850px]">
							Talktu for Schools
						</h2>
					</FadeUp>
					<div className="max-w-[450px] md:max-w-[700px] lg:max-w-[850px] hidden md:block">
						<MaskText
							phrases={["Talktu for Schools"]}
							tag="h2"
							className="font-bold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem] !leading-[120%]"
						/>
					</div>
					<FadeUp
						delay={0.2}
						className="text-[#4E5F76] max-w-xl md:text-lg lg:text-xl md:max-w-2xl lg:max-w-[800px] my-4"
					>
						With our wide range of resources, you can tailor each
						session to the unique needs of the children you support,
						turning every therapy session into a fun and rewarding
						journey of growth and learning
					</FadeUp>
					<FadeUp delay={0.3} className="flex justify-center w-full">
						<CTAButton href="/auth/signup?user=school" />
					</FadeUp>
				</div>
				<div className="max-w-[430px] md:max-w-[500px] lg:max-w-[1202px] mx-auto space-y-[120px]">
					<div className="flex flex-col text-[#67788F] gap-7 lg:flex-row xl:gap-28 lg:items-center lg:gap-14 xl:items-stretch">
						<FadeUp className="lg:w-1/2 rounded-2xl">
							<Image
								src="/images/schools_img.png"
								alt="meeting"
								width={200}
								height={200}
								className="block min-w-full rounded-2xl xl:min-h-full xl:object-cover"
							/>
						</FadeUp>
						<div className="lg:w-1/2">
							<FadeUp delay={0.1}>
								{flagshipContent.schools.description}
							</FadeUp>
							<ul className="mt-6 space-y-[18px] text-sm md:text-base">
								{flagshipContent.schools.points.map(
									(item, index) => (
										<FadeUp
											key={index}
											delay={0.2 * index}
											className="flex gap-2"
										>
											<div className="inline-block mt-1 min-w-3 max-h-3 bg-deep_blue lg:min-w-4 lg:min-h-4"></div>
											<p>{item}</p>
										</FadeUp>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
