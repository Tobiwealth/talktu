"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CTAButton from "./_components/CTAButton";
import HamburgerButton from "./_components/HamburgerButton";
import MobileMenu from "./_components/MobileMenu";

const navLinks = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/" },
	{ title: "For SLPs", path: "/" },
	{ title: "For Schools", path: "/" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	return (
		<header className="py-4 md:pt-8 md:pb-[37px] bg-deep_blue fixed w-full xl:h-[118px] flex items-center xl:py-0 xl:px-20 px-5  z-50">
			<nav className="container flex items-center justify-between flex-1 xl:text-xl relative">
				<Link href={"/"}>
					<Image
						src="/images/logo-white.svg"
						alt="logo"
						width={90}
						height={24}
						className="w-20 lg:w-auto"
					/>
				</Link>

				<div className="ml-auto md:hidden">
					<HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
				</div>

				<nav>
					<ul className="items-center hidden gap-4 font-semibold text-white md:flex">
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link
									href={link.path}
									className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main"
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
