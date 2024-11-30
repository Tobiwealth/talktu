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
						"w-6 h-[2px] bg-brand-600 rounded duration-300 transition-all ease-in-out bg-white",
						isOpen && "rotate-45 translate-y-[5px]"
					)
				)}
			></span>

			<span
				className={twMerge(
					clsx(
						"w-6 h-[2px] bg-brand-600 rounded duration-200 transition-all ease-in-out bg-white",
						isOpen && "opacity-0"
					)
				)}
			></span>

			<span
				className={twMerge(
					clsx(
						"w-6 h-[2px] bg-brand-600 rounded duration-300 transition-all ease-in-out bg-white",
						isOpen && "-rotate-45 -translate-y-[7px]"
					)
				)}
			></span>
		</div>
	);
};

export default HamburgerButton;
