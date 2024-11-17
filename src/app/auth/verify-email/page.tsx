"use client";
import RegistrationLayout from "@/components/auth/RegistrationLayout";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const otpLength = 6;
export default function VerifyEmail() {
	const [otp, setOtp] = useState(new Array(otpLength).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	useEffect(() => {
		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const value = e.target.value;
		if (isNaN(Number(value))) return;

		const newOtp = [...otp];
		// allow only one input
		newOtp[index] = value.substring(value.length - 1);
		setOtp(newOtp);

		// submit trigger
		const combinedOtp = newOtp.join("");
		if (combinedOtp.trim().length === otpLength) onOtpSubmit(combinedOtp);

		// move focus to the next input
		if (value && index < otpLength - 1 && inputRefs.current[index + 1]) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleClick = (index: number) => {
		inputRefs.current[index]?.setSelectionRange(1, 1);
	};

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		// if the key is backspace then focus on the previous input
		if (
			e.key === "Backspace" &&
			!otp[index] &&
			index > 0 &&
			inputRefs.current[index - 1]
		) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		const paste = e.clipboardData.getData("Text");
		const newOtp = [...otp];
		for (let i = 0; i < paste.length; i++) {
			newOtp[i] = paste[i];
		}
		setOtp(newOtp);

		console.log(paste);
	};

	const onOtpSubmit = (otp: string) => {
		// submit the OTP to the server
		console.log("OTP submitted:", otp);
	};

	return (
		<RegistrationLayout>
			<div className="auth-box min-[1300px]:scale-[0.9] sm:scale-[0.8] max-[1060px]:mt-28 max-sm:px-5">
				<div className="space-y-[1.875rem]">
					<div className="space-y-2">
						<h2 className="text-2xl font-bold sm:text-4xl text-dark-800 font-nunitosans">
							Verify Email Address
						</h2>
						<p className="text-neutral-700 font-nunito max-w-[380px] text-sm sm:text-base">
							Enter the six digit code sent to your email address
							to verify your email
						</p>
					</div>
					<form className="space-y-10">
						<div className="flex gap-[0.625rem] sm:justify-center justify-start max-w-[320px] sm:max-w-none mx-auto sm:mx-0">
							{otp.map((value, index) => (
								<input
									key={index}
									type="text"
									value={value}
									ref={(input) => {
										inputRefs.current[index] = input;
									}}
									onChange={(e) => handleChange(e, index)}
									onClick={() => handleClick(index)}
									onPaste={handlePaste}
									onKeyDown={(e) => handleKeyDown(e, index)}
									className="w-[12%] sm:p-3 text-center rounded-lg text-lg text-deep_blue focus:bg-retro_blue-300 focus:border-retro_blue-main duration-200 ease-in-out caret-blue-800 bg-grey-100 border border-grey-300 outline-none flex-1 sm:flex-none p-2"
								/>
							))}
						</div>
						<Link
							href={"/auth/login"}
							className="form-btn block text-center"
							type="submit"
						>
							Verify
						</Link>
					</form>
				</div>
			</div>
		</RegistrationLayout>
	);
}
