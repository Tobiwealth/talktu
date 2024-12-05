import clsx from "clsx";
import { nav } from "framer-motion/client";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface MobileMenuProps {
	isOpen: boolean;
	navLinks: { title: string; path: string }[];
}

export default function MobileMenu({ isOpen, navLinks }: MobileMenuProps) {
	return (
		<nav
			className={twMerge(
				clsx(
					" absolute left-0 right-0 top-[4.2rem] px-5 overflow-hidden transition-all duration-300 ease-in-out bg-deep_blue md:hidden",
					isOpen ? "max-h-[1000px] pt-4 pb-8 " : "max-h-0"
				)
			)}
		>
			<ul className="container gap-0 font-semibold text-white flex flex-col">
				{navLinks.map((link, index) => (
					<li key={index}>
						<Link
							href={link.path}
							className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main block"
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
