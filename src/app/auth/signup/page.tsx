"use client";
import RegistrationLayout from "@/components/auth/RegistrationLayout";
import DefaultForm from "@/components/auth/signup/DefaultForm";
import SchoolForm from "@/components/auth/signup/SchoolForm";
import Tabs from "@/components/auth/signup/Tabs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const tabs = [
	{
		id: "parent",
		label: "Parent",
	},
	{
		id: "slp",
		label: "SLP",
	},
	{
		id: "schools",
		label: "Schools",
	},
];

export default function SignUp() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState(tabs[0].id);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// Focus the input field and update the URL query parameter
		if (inputRef.current) {
			inputRef.current.focus();
		}
		router.push(`?user=${activeTab}`, { scroll: false });
	}, [router, activeTab]);

	const handleSignup = () => {
		router.push(`/onboarding?user=${activeTab}`);
	};

	return (
		<RegistrationLayout>
			<div className="space-y-4 auth-box min-[1300px]:scale-[0.9] sm:scale-[0.8] max-sm:px-4 max-sm:py-5 max-sm:space-y-6  max-sm:rounded-2xl min-[1060px]:translate-y-8">
				<div className="space-y-5">
					<div className="space-y-2">
						<h2 className="text-2xl font-bold sm:text-4xl text-dark-800 font-nunitosans">
							Create Account
						</h2>
						<p className="text-sm text-neutral-700 font-nunito sm:text-base">
							Create an account on talktu to get access to videos,
							resources and activities to help your child learn.
						</p>
					</div>
					<Tabs
						tabs={tabs}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</div>
				{(activeTab === "parent" || activeTab === "slp") && (
					<DefaultForm ref={inputRef} />
				)}
				{activeTab === "schools" && <SchoolForm ref={inputRef} />}
			</div>
		</RegistrationLayout>
	);
}
