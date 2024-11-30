"use client";
import { clsx } from "clsx";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	phrases: string[];
	tag: string;
	className?: string;
}

const MaskText = ({ phrases, tag, className }: Props) => {
	const animate = {
		initial: {
			y: "100%",
		},
		open: (i: number) => ({
			y: "0%",
			transition: {
				duration: 1,
				delay: 0.1 * i,
				ease: [0.33, 1, 0.68, 1],
			},
		}),
	};
	const body = useRef(null);
	const isInView = useInView(body, {
		once: true,
		margin: "-10%",
		amount: 0.4,
	});
	return (
		<div ref={body} className="overflow-hidden">
			{phrases.map((phrase, index) => {
				return (
					<div key={index} className="overflow-hidden">
						{tag === "h1" ? (
							<motion.h1
								variants={animate}
								initial="initial"
								animate={isInView ? "open" : ""}
								custom={index}
								className={twMerge(
									clsx("transform", className)
								)}
							>
								{phrase}
							</motion.h1>
						) : tag === "h2" ? (
							<motion.h2
								variants={animate}
								initial="initial"
								animate={isInView ? "open" : ""}
								custom={index}
								className={twMerge(
									clsx("transform", className)
								)}
							>
								{phrase}
							</motion.h2>
						) : tag === "h3" ? (
							<motion.h3
								variants={animate}
								initial="initial"
								animate={isInView ? "open" : ""}
								custom={index}
								className={twMerge(
									clsx("transform", className)
								)}
							>
								{phrase}
							</motion.h3>
						) : (
							<motion.p
								variants={animate}
								initial="initial"
								animate={isInView ? "open" : ""}
								custom={index}
								className={twMerge(
									clsx("transform", className)
								)}
							>
								{phrase}
							</motion.p>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default MaskText;
