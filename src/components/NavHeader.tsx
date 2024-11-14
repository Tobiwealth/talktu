"use client";
import Image from "next/image";

interface NavHeaderProps {
	backLink?: boolean;
}

export default function NavHeader({ backLink }: NavHeaderProps) {
	return (
		<header className="lg:flex items-center w-full h-[82px] bg-retro_blue-300 border-b border-retro_blue-400 px-[46px] box-border hidden">
			{backLink && (
				<button
					className="flex items-center gap-1 py-2 px-4 rounded-lg transition-all duration-200 ease-in"
					onClick={() => window.history.back()}
				>
					<Image
						src={"/images/arrow-left.svg"}
						alt="left arrow"
						width={16}
						height={16}
					/>
					<span className="font-medium text-neutral-800 ">
						Go back
					</span>
				</button>
			)}
			<div className="flex items-center justify-center flex-1">
				<Image
					src={"/images/logo-dark.svg"}
					alt="talktu"
					width={100}
					height={100}
					className="w-24"
				/>
			</div>
		</header>
	);
}
