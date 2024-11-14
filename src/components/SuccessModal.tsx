import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SuccessModalProps {
	title: string;
	description: string;
	CTA: string;
	redirectTo?: string;
}

export default function SuccessModal({
	title,
	description,
	CTA,
	redirectTo,
}: SuccessModalProps) {
	return (
		<div className="relative z-50 bg-white rounded-[22px] w-full shadow-[0_8px_0] shadow-retro_blue-300 h-fit border border-retro_blue-400 flex flex-col items-center text-center px-4 pt-8 pb-12 gap-9 max-w-[408px] md:self-start lg:max-w-[570px]">
			<Image
				src={"/images/success.svg"}
				alt="success icon"
				width={146}
				height={146}
				className="w-[90px] lg:w-28"
			/>
			<div className="space-y-4">
				<div className="text-2xl font-bold lg:text-3xl">{title}</div>
				<p className="text-xl text-[#475569] lg:max-w-[400px] mx-auto">
					{description}
				</p>
			</div>
			<Link
				href={redirectTo || "/"}
				className="form-btn text-base max-w-[227px]"
			>
				{CTA}
			</Link>
		</div>
	);
}
