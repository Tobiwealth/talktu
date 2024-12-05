"use client";
import axios from "@/api/useAxios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";


const otpLength = 4;
export default function VerifyEmail() {
	const [otp, setOtp] = useState(new Array(otpLength).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
	const router = useRouter();
	const email = "user@example.com"; // Replace with the actual email value

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

		// Only take first otpLength characters from pasted text
		const pasteLength = Math.min(paste.length, otpLength);
		for (let i = 0; i < pasteLength; i++) {
			if (!isNaN(Number(paste[i]))) {
				newOtp[i] = paste[i];
			}
		}
		setOtp(newOtp);

		// Trigger submit if we have a complete OTP
		const combinedOtp = newOtp.join("");
		if (combinedOtp.length === otpLength) {
			onOtpSubmit(combinedOtp);
		}
	};

	const onOtpSubmit = async (token: string) => {
		const verificationData = {
			action: "verifySignupShort",
			value: {
				user: { email },
				token,
			},
		};

		console.log(verificationData);

		try {
			const response = await axios.post(
				"/auth-management",
				JSON.stringify(verificationData),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true
				}
			);
			console.log(response.data);
			router.push("/auth/login");
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const token = otp.join("");
		if (token.length === otpLength) {
			await onOtpSubmit(token);
		}
	};

	// const handleResendVerification = async () => {
	// 	try {
	// 		const response = await axios.post(
	// 			"/auth-management",
	// 			JSON.stringify({
	// 				action: "resendVerifySignup",
	// 				value: { email: email },
	// 			}),
	// 			{
	// 				headers: { "Content-Type": "application/json" },
	// 				// withCredentials: true
	// 			}
	// 		);
	// 		console.log(response.data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	return (
		<div className="flex flex-col w-screen min-h-screen bg-retro_blue-100">
			<div className="hidden md:flex justify-center bg-retro_blue-300 items-center h-[82px]">
				<Image
					src="/images/logo-dark.svg"
					alt="talktu"
					width={100}
					height={100}
					className="w-24"
				/>
			</div>
			<div className="relative flex justify-center flex-1 px-4 pt-16 overflow-hidden md:pt-10">
				<div className="auth-box min-[1300px]:scale-[0.9] sm:scale-[0.8] max-sm:px-5">
					<div className="space-y-6">
						<div className="space-y-2">
							<h2 className="text-2xl font-bold sm:text-4xl text-dark-800 font-nunitosans">
								Verification
							</h2>
							<p className="text-neutral-700 font-nunito max-w-[380px] text-sm sm:text-base">
								Enter the 4-digit code you received in your
								email
							</p>
						</div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="flex gap-[0.625rem] justify-start max-w-[320px] sm:max-w-none sm:mx-0 px-10 sm:px-0">
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
										onKeyDown={(e) =>
											handleKeyDown(e, index)
										}
										className="w-[12%] sm:p-3 text-center rounded-lg text-lg text-deep_blue focus:bg-retro_blue-300 focus:border-retro_blue-main duration-200 ease-in-out caret-blue-800 bg-grey-100 border border-grey-300 outline-none flex-1 sm:flex-none p-2"
									/>
								))}
							</div>
							<div className="text-[#FF5555]">00:30</div>
							<div className="space-y-6">
								<button
									type="submit"
									className="w-full form-btn"
								>
									Reset Password
								</button>
								<p className="text-sm text-neutral-600">
									Didn&apos;t s receive code?{" "}
									<button
										type="button"
										// onClick={handleResendVerification}
										className="font-medium text-[#FF5555] hover:underline"
									>
										Resend
									</button>
								</p>
							</div>
						</form>
					</div>
				</div>

				{/* Illustrations */}
				<Image
					src={"/images/bg-icon-1.svg"}
					alt="bg-icon-1"
					width={100}
					height={100}
					className="absolute -top-5 left-0 w-[70px] z-10 sm:w-auto md:top-[42px] md:left-0"
				/>
				<Image
					src={"/images/bg-icon-2.svg"}
					alt="bg-icon-2"
					width={100}
					height={100}
					className="absolute -right-2 -top-7 w-[80px] sm:w-auto z-10 md:right-0 md:top-0"
				/>
				<Image
					src={"/images/bg-icon-3.svg"}
					alt="bg-icon-3"
					width={100}
					height={100}
					className="absolute z-10 w-auto sm:left-0 sm:bottom-0 -bottom-20 -left-10"
				/>
				<Image
					src={"/images/bg-icon-4.svg"}
					alt="bg-icon-4"
					width={100}
					height={100}
					className="absolute z-10 -bottom-5 -right-16 size-[200px] sm:size-auto sm:right-0 sm:bottom-0"
				/>
			</div>
		</div>
	);
}
