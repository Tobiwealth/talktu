import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface CTAButtonProps {
	className?: string;
	href?: string;
}

export default function CTAButton({ className, href }: CTAButtonProps) {
	return (
		<Link
			href={href || "/auth/signup"}
			className={twMerge(
				clsx("sub-btn max-w-[186px] text-center max-md:py-2", className)
			)}
		>
			Get Started
		</Link>
	);
}
