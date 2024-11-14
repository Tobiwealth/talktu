import Link from "next/link";
import React from "react";

export default function CTAButton() {
	return (
		<Link
			href="#plans"
			className="sub-btn max-w-[168px] md:max-w-[325px] text-center"
		>
			Get my plan
		</Link>
	);
}
