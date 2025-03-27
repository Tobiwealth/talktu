"use client";
import RegistrationLayout from "@/components/auth/RegistrationLayout";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import axios from "@/api/useAxios";

const otpLength = 6;
export default function VerifyEmailComponent() {
	const [otp, setOtp] = useState(new Array(otpLength).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get("email");
	const [isVerifying, setIsVerifying] = useState(false);
	const [isResending, setIsResending] = useState(false);

	useEffect(() => {
		if (!email) {
			router.push("/auth/signup");
			return;
		}

		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, [email, router]);

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
		setIsVerifying(true);
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
		} finally {
			setIsVerifying(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const token = otp.join("");
		if (token.length === otpLength) {
			await onOtpSubmit(token);
		}
	};

	const handleResendVerification = async () => {
		setIsResending(true);
		try {
			const response = await axios.post(
				"/auth-management",
				JSON.stringify({
					action: "resendVerifySignup",
					value: { email: email },
				}),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true
				}
			);
			console.log(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			setIsResending(false);
		}
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
					<form onSubmit={handleSubmit} className="space-y-10">
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
						<div className="space-y-4">
							<button
								type="submit"
								disabled={isVerifying}
								className="w-full form-btn disabled:opacity-70 disabled:cursor-not-allowed"
							>
								{isVerifying ? (
									<div className="w-6 h-6 mx-auto border-2 rounded-full border-deep_blue border-t-transparent animate-spin" />
								) : (
									"Verify"
								)}
							</button>
							<p className="text-sm text-center text-neutral-600">
								Didn&apos;t receive code?{" "}
								<button
									type="button"
									onClick={handleResendVerification}
									disabled={isResending}
									className="font-medium text-retro_blue-main hover:underline disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:no-underline"
								>
									{isResending ? (
										<span className="inline-block w-4 h-4 align-middle border-2 rounded-full border-retro_blue-main border-t-transparent animate-spin" />
									) : (
										"Resend"
									)}
								</button>
							</p>
						</div>
					</form>
				</div>
			</div>
		</RegistrationLayout>
	);
}
