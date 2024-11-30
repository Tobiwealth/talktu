import clsx from "clsx";
import { nav } from "framer-motion/client";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface MobileMenuProps {
	isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
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
				<li>
					<Link
						href={"/"}
						className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main block"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href={"/about"}
						className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main block"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href={"/for-slps"}
						className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main block"
					>
						For SLPs
					</Link>
				</li>
				<li>
					<Link
						href={"/for-schools"}
						className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main block"
					>
						For Schools
					</Link>
				</li>
			</ul>
		</nav>
	);
}
