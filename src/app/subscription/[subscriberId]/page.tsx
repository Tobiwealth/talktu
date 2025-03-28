'use client'
import NavHeader from "@/components/NavHeader";
import BottomFeaturesSection from "@/components/subscription/BottomFeaturesSection";
import MidFeaturesSection from "@/components/subscription/MidFeaturesSection";
import PlanSection from "@/components/subscription/PlanSection";
import TopFeaturesSection from "@/components/subscription/TopFeaturesSection";
import Image from "next/image";

export default function Subscription({ params }: { params: { subscriberId: string } }) {
	const {subscriberId} = params;

	//console.log(subscriberId)
	return (
		<div className="relative flex flex-col overflow-hidden bg-retro_blue-100">
			<NavHeader backLink />
			<div className="mt-10 lg:hidden">
				<Image
					src={"/images/logo-dark.svg"}
					alt="talktu"
					width={100}
					height={100}
					className="w-20 mx-auto"
				/>
			</div>
			<div className="flex justify-center flex-1 px-4">
				<div className="lg:bg-[#FCFDFF] w-full max-w-[961px] flex flex-col gap-24 md:gap-16 lg:gap-8 rounded-[32px] lg:px-10 lg:py-12 mt-[38px] mb-48 lg:my-[38px]">
					<TopFeaturesSection />
					<MidFeaturesSection />
					<BottomFeaturesSection />
					<PlanSection subscriberId={subscriberId}/>
				</div>
			</div>

			<Image
				src={"/images/bg-icon-1.svg"}
				alt="bg-icon-1"
				width={100}
				height={100}
				className="lg:hidden absolute -top-5 left-0 z-10 w-[70px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-2.svg"}
				alt="bg-icon-2"
				width={100}
				height={100}
				className="lg:hidden absolute z-10 -right-2 -top-7 w-[80px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-3.svg"}
				alt="bg-icon-3"
				width={100}
				height={100}
				className="absolute z-10 w-auto lg:hidden -bottom-20 -left-10 sm:bottom-0 sm:left-0"
			/>
			<Image
				src={"/images/bg-icon-4.svg"}
				alt="bg-icon-4"
				width={100}
				height={100}
				className="lg:hidden absolute -bottom-5 -right-16 z-10 size-[200px] sm:size-auto sm:bottom-0 sm:right-0"
			/>
		</div>
	);
}
