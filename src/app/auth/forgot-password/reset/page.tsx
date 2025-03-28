"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "@/api/useAxios";
import { useAuthStore } from "@/store/authStore";
import LoadingScreen from "@/components/common/LoadingScreen";

interface FormData {
	password: string;
	confirmPassword: string;
}

export default function ResetPassword() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormData>();

	// Watch password field for confirmation matching
	const password = watch("password");

	const onSubmit = handleSubmit(async (data) => {
		setIsLoading(true);
		try {
			//console.log("Passwords match:", data);
			// TODO: Implement password reset API call here
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
			router.push(`/auth/login`);
		} catch (error) {
			console.error("Password reset error:", error);
		} finally {
			setIsLoading(false);
		}
	});

	return (
		<div className="flex flex-col w-screen min-h-screen bg-retro_blue-100">
			{isLoading && <LoadingScreen message="Updating password..." />}

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
				<div className="relative z-50 space-y-6 auth-box min-[1300px]:scale-[0.9] sm:scale-[0.8] max-sm:rounded-2xl max-sm:px-4 w-full">
					<div className="space-y-2">
						<h2 className="text-2xl font-bold sm:text-4xl text-dark-800 font-nunitosans">
							Enter New Password
						</h2>
						<p className="text-neutral-700 font-nunito max-w-[428px] text-sm sm:text-base">
							Create a new password to continue
						</p>
					</div>

					<form onSubmit={onSubmit} className="space-y-6">
						<div className="form-field">
							<div className="space-y-1">
								<label htmlFor="password">New Password</label>
								<div className="text-base text-neutral-600">
									Password should be at least 8 characters
									long and should contain numbers and symbols
								</div>
							</div>
							<input
								id="password"
								{...register("password", {
									required: "Password is required",
									pattern: {
										value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
										message:
											"Password must be at least 8 characters long and contain numbers and symbols",
									},
								})}
								type="password"
								placeholder="Enter Password"
								className="input-box"
							/>
							{errors.password && (
								<p className="mt-1 text-sm text-red-500">
									{errors.password.message}
								</p>
							)}
						</div>

						<div className="form-field">
							<div className="space-y-1">
								<label htmlFor="confirmPassword">
									Confirm Password
								</label>
							</div>
							<input
								id="confirmPassword"
								{...register("confirmPassword", {
									required: "Please confirm your password",
									validate: (value) =>
										value === password ||
										"Passwords do not match",
								})}
								type="password"
								placeholder="Enter Password Again"
								className="input-box"
							/>
							{errors.confirmPassword && (
								<p className="mt-1 text-sm text-red-500">
									{errors.confirmPassword.message}
								</p>
							)}
						</div>

						<button
							className="block text-center form-btn disabled:opacity-70 disabled:cursor-not-allowed"
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? (
								<div className="w-6 h-6 mx-auto border-2 rounded-full border-deep_blue border-t-transparent animate-spin" />
							) : (
								"Update Password"
							)}
						</button>
					</form>
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
