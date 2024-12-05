"use client";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import FeatureCard from "./_components/FeatureCard";
import FeatureButton from "./_components/FeatureButton"; // Added import statement
import { featureCategories, features } from "./data";
import FadeUp from "./_components/animated components/FadeUp";
import MaskText from "./_components/animated components/MaskText";
import FadeIn from "./_components/animated components/FadeIn";

export default function LearningPathSection() {
	const [ activeTab, setActiveTab ] = useState(0);
	
	return (
		<section className="bg-white pt-[88px] pb-[155px] space-y-14 md:space-y-[76px]">
			<div className="container flex flex-col gap-2 px-4 text-center">
				<FadeUp delay={0.1} className="min-[363px]:hidden">
					<h2 className="font-bold text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] !leading-[120%]">
						A Learning Path <br /> Designed for Your Child
					</h2>
				</FadeUp>
				<MaskText
					phrases={["A Learning Path", "Designed for Your Child"]}
					tag="h2"
					className="hidden min-[363px]:block font-bold text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] !leading-[120%]"
				/>
				<FadeUp delay={0.2}>
					<p className="text-[#4E5F76] max-w-md mx-auto md:text-lg lg:text-xl lg:max-w-xl">
						Discover a tailored learning path that supports your
						child’s unique communication journey
					</p>
				</FadeUp>
				<FadeUp delay={0.3} className="items-center justify-center hidden gap-4 mt-8 md:flex">
					{featureCategories.map((item, index) => (
						<FeatureButton
							key={item}
							item={item}
							index={index}
							activeTab={activeTab}
							backgroundColor={features[index].backgroundColor}
							textColor={features[index].textColor}
							bulletColor={features[index].bulletColor}
							onClick={() => setActiveTab(index)}
						/>
					))}
				</FadeUp>
			</div>
			<FadeUp
				delay={0.4}
				className="px-4 md:overflow-x-hidden md:px-0 md:pr-[3rem] lg:pr-[5rem]"
			>
				<div className="lg:container md:overflow-x-visible 2xl:px-20 lg:px-5">
					<div className="md:max-w-[95%] flex flex-col gap-6 items-center md:flex-row md:overflow-x-visible  md:px-0 xl:max-w-[1220px] lg:gap-[36px] mx-auto xl:mx-0 md:items-start md:h-fit">
						{features.map((feature) => (
							<FeatureCard
								{...feature}
								key={feature.title}
								style={{
									transform: `translateX(-${
										activeTab * 100
									}%)`,
								}}
							/>
						))}
					</div>
				</div>
			</FadeUp>
		</section>
	);
}
