"use client";
import RegistrationLayout from "@/components/auth/RegistrationLayout";
import Tabs from "@/components/auth/signup/Tabs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axios from "@/api/useAxios";
import SignupForm from "@/components/auth/signup/SignupForm";
import { AxiosError } from 'axios';


type InputGroupRef = {
	emailInputValue: () => void;
	nameInputValue: () => void;
	passwordInputValue: () => void;
};

const tabs = [
	{
		id: "parent",
		label: "Parent",
	},
	{
		id: "therapist",
		label: "SLP",
	},
	{
		id: "school",
		label: "Schools",
	},
];

interface FormData {
	name: string;
	email: string;
	password: string;
}

export default function SignUp() {
  const [errMsg, setErrMsg] = useState<string>("");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [activeTab]);

	const handleFormSubmit = async (data: FormData) => {
		const formData = {
			role: activeTab,
			...data,
		};

		console.log("Form submitted:", formData);
		const { name, role, email, password } = formData;
		try {
			const response = await axios.post(
				"/users",
				JSON.stringify({ name, role, email, password }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true
				}
			);
			console.log(response.data);
			router.push(
				`/auth/verify-email?email=${encodeURIComponent(
					response.data.email
				)}`
			);
		} catch (err) {
			const axiosError = err as AxiosError;
			console.log(axiosError);
			if (!axiosError?.response) {
	            setErrMsg('No Server Response');
	        } else if (axiosError?.status === 403) {
	            setErrMsg('You do not have permission to create an admin account');
	        } else {
	            setErrMsg('Sign up Failed');
	        }
		}
		// Pass email to verify-email page
	};

	return (
		<RegistrationLayout>
			<div className="space-y-4 auth-box min-[1300px]:scale-[0.9] sm:scale-[0.8] max-sm:px-4 max-sm:py-5 max-sm:space-y-6 max-sm:rounded-2xl min-[1060px]:translate-y-8">
				<header className="space-y-5">
					<div className="space-y-2">
						<h1 className="text-2xl font-bold sm:text-4xl text-dark-800 font-nunitosans">
							Create Account
						</h1>
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
				</header>
				{errMsg && <p className="font-nunito font-normal text-sm text-[#DC143C]">{errMsg}</p>}
				<SignupForm
					formType={activeTab === "school" ? "school" : "default"}
					onSubmit={handleFormSubmit}
				/>
			</div>
		</RegistrationLayout>
	);
}
