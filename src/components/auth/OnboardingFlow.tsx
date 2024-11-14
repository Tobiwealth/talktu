import Image from "next/image";
import React from "react";

const onboardingFlow = [
	{
		title: "Create an Account as a Parent, Learner",
		description:
			"Lorem ipsum dolor sit amet consectetur. Massa fames bibendum nisl urna sed sagittis elementum. Enim lorem nam dui mauris netus",
	},
	{
		title: "Take the Assessment",
		description:
			"Lorem ipsum dolor sit amet consectetur. Massa fames bibendum nisl urna sed sagittis elementum. Enim lorem nam dui mauris netus",
	},
	{
		title: "Get Access to a Personalised learning plan for your child",
		description:
			"Lorem ipsum dolor sit amet consectetur. Massa fames bibendum nisl urna sed sagittis elementum. Enim lorem nam dui mauris netus",
	},
];

export default function OnboardingFlow() {
	return (
		<div className="w-[45.83%] max-[1060px]:hidden h-full bg-deep_blue relative grid place-content-center px-[59px] max-[1400px]:px-[0px] max-[1280px]:w-1/2">
			<div className="content space-y-[35px] max-[1400px]:scale-[0.9] max-[1300px]:scale-[0.85]">
				<div className="space-y-[30px] max-w-[510px]">
					{/* Logo */}
					<Image
						src={"/images/logo.svg"}
						alt="talktu"
						width={100}
						height={100}
						className="w-24"
					/>
					<div className="space-y-[18px]">
						<h1 className="text-3xl font-bold text-white font-nunitosans">
							Lorem ipsum dolor sit amet consectetur. Massa fames
						</h1>
						<p className="font-medium text-neutral-400 font-nunito">
							Lorem ipsum dolor sit amet consectetur. Massa fames
							bibendum nisl urna sed sagittis elementum. Enim
							lorem nam dui mauris netus
						</p>
					</div>
				</div>
				<ul className="space-y-[33px] max-w-[526px]">
					{onboardingFlow.map((item, index) => (
						<li
							className="flex gap-[13px] justify-start"
							key={index}
						>
							<Image
								src={"/images/checkmark.svg"}
								alt="checkmark"
								width={24}
								height={24}
								className="self-start mt-[2px]"
							/>

							<div className="space-y-[9px]">
								<h4 className="text-[#E5E6E7] font-nunito font-bold text-h4">
									{item.title}
								</h4>
								<p className="font-medium text-neutral-500 font-nunito">
									{item.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>

			{/* Illustrations */}
			<Image
				src={"/images/step-1.svg"}
				alt="step-1"
				width={100}
				height={100}
				className="absolute top-0 left-0"
			/>
			<Image
				src={"/images/step-2.svg"}
				alt="step-2"
				width={100}
				height={100}
				className="absolute top-0 right-0"
			/>
			<Image
				src={"/images/step-3.svg"}
				alt="step-3"
				width={100}
				height={100}
				className="absolute bottom-0 left-0"
			/>
			<Image
				src={"/images/step-4.svg"}
				alt="step-4"
				width={100}
				height={100}
				className="absolute bottom-0 right-0"
			/>
		</div>
	);
}
