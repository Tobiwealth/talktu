import Image from "next/image";
import Link from "next/link";
import React from "react";

const onboardingFlow = [
	{
		title: "Create Your Account as a Parent",
		description:
			"Sign up quickly and easily to begin your child's personalized therapy journey.",
	},
	{
		title: "Complete the Initial Assessment",
		description:
			"Help us understand your child's unique needs through a thorough, interactive assessment.",
	},
	{
		title: "Access Your Child’s Personalized Learning Plan",
		description:
			"Receive a customized therapy plan with engaging activities and expert resources designed just for your child.",
	},
];

export default function OnboardingFlow() {
	return (
		<div className="w-[45.83%] max-[1059px]:hidden min-h-[780px] bg-deep_blue relative grid place-content-center px-[59px] max-[1400px]:px-[0px] max-[1280px]:w-1/2">
			<div className="content space-y-[35px] max-[1400px]:scale-[0.9] max-[1300px]:scale-[0.85]">
				<div className="space-y-[30px] max-w-[510px]">
					{/* Logo */}
					<Link href={"/"}>
						<Image
							src={"/images/logo.svg"}
							alt="talktu"
							width={100}
							height={100}
							className="w-24"
						/>
					</Link>
					<div className="space-y-[18px]">
						<h1 className="text-3xl font-bold text-white font-nunitosans">
							Start Your Child&apos;s Personalized Speech Therapy
							Journey Today
						</h1>
						<p className="font-medium text-neutral-400 font-nunito">
							Empower your child to communicate confidently with
							Talktu&apos;s tailored approach to online speech
							therapy. Follow these simple steps to get started:
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
