"use client";
/* eslint-disable react/prop-types */
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeUpProps {
	children?: ReactNode;
	delay?: number;
	className?: string;
}

const FadeUp = ({ children, delay, className }: FadeUpProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-10%",
		amount: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0.01, transform: "translateY(20px)" }}
			animate={
				isInView
					? {
							opacity: 1,
							transform: "translateY(0px)",
					  }
					: {}
			}
			transition={{
				duration: 0.6,
				ease: [0.62, 0.155, 0.46, 0.88],
				delay,
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeUp;
