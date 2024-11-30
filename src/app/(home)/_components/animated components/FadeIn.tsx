/* eslint-disable react/prop-types */
"use client";;
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInProps {
	children?: ReactNode;
	delay?: number;
	className?: string;
}

const FadeIn = ({ children, delay, className }: FadeInProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
		amount: 0.4,
	});
	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0.01 }}
			animate={
				isInView
					? {
							opacity: 1
					  }
					: {}
				}
			transition={{
				duration: 0.3,
				ease: [0.645, 0.045, 0.355, 1],
				delay,
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
