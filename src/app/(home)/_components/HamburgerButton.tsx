import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface HamburgerButtonProps {
	isOpen: boolean;
	toggleMenu: () => void;
	hamburgerButtonColor?: string;
}

const HamburgerButton = ({
	isOpen,
	toggleMenu,
	hamburgerButtonColor,
}: HamburgerButtonProps) => {
	return (
		<div
			className="flex flex-col space-y-[4px] md:hidden pr-0 p-3 cursor-pointer relative z-30"
			onClick={toggleMenu}
		>
			<span
				className={twMerge(
					clsx(
						"w-6 h-[2px] bg-brand-600 rounded duration-300 transition-all ease-in-out",
						isOpen && "rotate-45 translate-y-[5px]",
						hamburgerButtonColor || "bg-white"
					)
				)}
			></span>

			<span
				className={twMerge(
					clsx(
						"w-6 h-[2px] bg-brand-600 rounded duration-200 transition-all ease-in-out",
						isOpen && "opacity-0",
						hamburgerButtonColor || "bg-white"
					)
				)}
			></span>

			<span
				className={twMerge(
					clsx(
						"w-6 h-[2px] bg-brand-600 rounded duration-300 transition-all ease-in-out",
						isOpen && "-rotate-45 -translate-y-[7px]",
						hamburgerButtonColor || "bg-white"
					)
				)}
			></span>
		</div>
	);
};

export default HamburgerButton;
