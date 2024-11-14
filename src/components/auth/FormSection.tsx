import Image from "next/image";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function FormSection({ children }: Props) {
	return (
		<div className="relative flex justify-center w-full min-h-screen px-4 pt-4 pb-20 overflow-hidden sm:grid sm:place-content-center min-[1060px]:w-1/2 xl:w-[54.17%]">
			{children}

			{/* Illustrations */}
			<Image
				src={"/images/bg-icon-1.svg"}
				alt="bg-icon-1"
				width={100}
				height={100}
				className="absolute -top-5 left-0 z-10 w-[70px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-2.svg"}
				alt="bg-icon-2"
				width={100}
				height={100}
				className="absolute z-10 -right-2 -top-7 w-[80px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-3.svg"}
				alt="bg-icon-3"
				width={100}
				height={100}
				className="absolute z-10 w-auto -bottom-20 -left-10 sm:bottom-0 sm:left-0"
			/>
			<Image
				src={"/images/bg-icon-4.svg"}
				alt="bg-icon-4"
				width={100}
				height={100}
				className="absolute -bottom-5 -right-16 z-10 size-[200px] sm:size-auto sm:bottom-0 sm:right-0"
			/>
		</div>
	);
}
