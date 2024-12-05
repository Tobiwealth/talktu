import Image from "next/image";
import React from "react";
import OnboardingFlow from "./OnboardingFlow";
import Tabs from "./signup/Tabs";
import FormSection from "./FormSection";

interface Props {
	children: React.ReactNode;
}

export default function RegistrationLayout({ children }: Props) {
	return (
		<div className="flex w-screen min-h-[780px] bg-retro_blue-100 min-[1060px]:min-h-screen">
			<OnboardingFlow />
			<FormSection>{children}</FormSection>
		</div>
	);
}
