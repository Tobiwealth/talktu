import React from 'react'
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface FeatureButtonProps {
	item: string;
	index: number;
	activeTab: number;
	backgroundColor: string;
	textColor: string;
	bulletColor: string;
	onClick: () => void;
}

export default function FeatureButton({
	item,
	index,
	activeTab,
	backgroundColor,
	textColor,
	bulletColor,
	onClick,
}: FeatureButtonProps) {
	return (
		<button
			onClick={onClick}
			className={twMerge(
				clsx(
					"w-fit flex items-center px-4 py-[10px] rounded-full gap-2 font-medium transition-all ease-out duration-300",
					activeTab === index
						? `${backgroundColor} ${textColor}`
						: "bg-[#ECF1F5]"
				)
			)}
		>
			<div
				className={twMerge(
					clsx(
						"size-[12px] rounded-full",
						activeTab === index ? bulletColor : "bg-neutral-700"
					)
				)}
			></div>
			<div>{item}</div>
		</button>
	);
}
