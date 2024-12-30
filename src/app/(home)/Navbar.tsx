"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CTAButton from "./_components/CTAButton";
import HamburgerButton from "./_components/HamburgerButton";
import MobileMenu from "./_components/MobileMenu";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const navLinks = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/#about" },
	{ title: "For SLTs", path: "/slts-and-schools/" },
	{ title: "For Schools", path: "/slts-and-schools/" },
];

interface NavbarProps {
	logo?: "light" | "dark";
	backgroundColor?: string;
	textColor?: string;
	hamburgerButtonColor?: string;
}

export default function Navbar({
	logo = "light",
	backgroundColor,
	textColor,
	hamburgerButtonColor,
}: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	return (
		<header
			className={twMerge(
				clsx(
					"py-4 md:pt-8 md:pb-[37px] fixed w-full md:h-[98px] flex items-center xl:py-0 xl:px-20 px-5 z-50 top-0",
					backgroundColor || "bg-deep_blue"
				)
			)}
		>
			<nav className="container relative flex items-center justify-between flex-1">
				<Link href={"/"}>
					<Image
						src={
							logo === "light"
								? "/images/logo-white.svg"
								: "/images/logo-dark.svg"
						}
						alt="logo"
						width={90}
						height={24}
						className="w-20 lg:w-[90px]"
					/>
				</Link>

				<div className="ml-auto md:hidden">
					<HamburgerButton
						isOpen={isOpen}
						toggleMenu={toggleMenu}
						hamburgerButtonColor={hamburgerButtonColor}
					/>
				</div>

				<nav>
					<ul
						className={twMerge(
							clsx(
								"items-center hidden gap-4 font-semibold md:flex",
								textColor || "text-white"
							)
						)}
					>
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link
									href={link.path}
									className={twMerge(
										"p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main"
									)}
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="hidden md:block">
					<CTAButton className="min-w-[150px] lg:min-w-[186px]" />
				</div>
			</nav>
			<MobileMenu isOpen={isOpen} navLinks={navLinks} />
		</header>
	);
}
