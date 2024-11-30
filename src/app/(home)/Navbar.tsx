"use client";
import Image from "next/image";
import Link from "next/link";
import HamburgerButton from "./_components/HamburgerButton";
import CTAButton from "@/components/subscription/CTAButton";
import { useState } from "react";
import MobileMenu from "./_components/MobileMenu";

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
						<li>
							<Link
								href={"/"}
								className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/about"}
								className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href={"/for-slps"}
								className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main"
							>
								For SLPs
							</Link>
						</li>
						<li>
							<Link
								href={"/for-schools"}
								className="p-2 transition-colors duration-200 ease-in-out cursor-pointer hover:text-sunglow-main"
							>
								For Schools
							</Link>
						</li>
					</ul>
				</nav>

				<div className="hidden md:block">
					<Link
						href="https://docs.google.com/forms/d/e/1FAIpQLSfmezJ1izTztneqfjNOPoyem_akC5um4azsDVtdEaUH24WNJA/viewform"
						target="_blank"
						rel="noreferrer"
						className="sub-btn text-center font-bold min-w-[150px] lg:min-w-[186px]"
					>
						Get Started
					</Link>
				</div>
			</nav>
			<MobileMenu isOpen={isOpen} />
		</header>
	);
}
