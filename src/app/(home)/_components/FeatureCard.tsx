import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface FeatureCardProps {
	img: string;
	title: string;
	description: string;
	backgroundColor: string;
	imgBackgroundColor: string;
	textColor: string;
	className?: string | boolean;
	style: object;
}

export default function FeatureCard(props: FeatureCardProps) {
	return (
		<div
			className={twMerge(
				clsx(
					" flex flex-col rounded-[18px] max-w-[414px] md:mzx-w-none md:min-w-full md:flex-row md:min-h-[350px] md:rounded-[62px] gap-6 md:gap-0 transition-transform ease-out duration-500",
					props.backgroundColor,
					props.textColor,
					props.className
				)
			)}
			style={props.style}
		>
			<div
				className={twMerge(
					clsx(
						"rounded-b-[2.5rem] rounded-t-[18px] md:flex-1 md:w-1/2 md:rounded-l-[62px] md:rounded-r-none md:flex md:items-end overflow-hidden",
						props.imgBackgroundColor
					)
				)}
			>
				<Image
					src={props.img}
					width={588}
					height={618}
					alt="illustrations"
					className="block w-full h-[250px] md:h-auto md:w-[120%] md:rounded-l-[62px] md:rounded-r-none md:scale-[1.18] lg:scale-100"
				/>
			</div>
			<div className="px-6 pt-4 pb-10  md:flex-1 md:flex md:items-center md:w-1/2 md:py-0 md:px-10 xl:px-[50px]">
				<div className="space-y-3 lg:space-y-4 lg:pr-10 xl:pr-14 xl:space-y-6">
					<div className="text-xl font-bold lg:text-2xl xl:text-4xl">
						{props.title}
					</div>
					<p className="opacity-[94%] xl:text-2xl lg:text-lg">
						{props.description}
					</p>
				</div>
			</div>
		</div>
	);
}
