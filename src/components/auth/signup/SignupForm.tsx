import Link from "next/link";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import GoogleSignInButton from "../GoogleSignInButton";
import axios from "@/api/useAxios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface SignupFormData {
	name: string;
	email: string;
	password: string;
}

interface SignupFormProps {
	onSubmit: (data: SignupFormData) => void;
	formType: "default" | "school";
}

export default function SignupForm({ onSubmit, formType }: SignupFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [isGoogleLoading, setIsGoogleLoading] = useState(false);
	const [showPassword, setShowpassword] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupFormData>();

	const isSchoolForm = formType === "school";

	const handleFormSubmit = async (data: SignupFormData) => {
		try {
			setIsLoading(true);
			await onSubmit(data);
		} catch (error) {
			console.error("Signup error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			setIsGoogleLoading(true);
			// TODO: Implement Google sign-in
			//console.log("Google sign-in clicked");
			const response = await axios.get(
				"/oauth/google",
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true
				}
			);
		} catch (error) {
			console.error("Google signin error:", error);
		} finally {
			setIsGoogleLoading(false);
		}
	};

	return (
		<>
			<form
				className="space-y-6"
				onSubmit={handleSubmit(handleFormSubmit)}
			>
				<div className="space-y-4">
					{isSchoolForm ? (
						<>
							<div className="form-field">
								<label htmlFor="name">School Name</label>
								<input
									id="name"
									{...register("name", {
										required: "School name is required",
									})}
									type="text"
									placeholder="Enter school name"
									className="input-box"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">
										{errors.name.message}
									</p>
								)}
							</div>
							<div className="form-field">
								<label htmlFor="email">
									School Email Address
								</label>
								<input
									id="email"
									{...register("email", {
										required:
											"School email address is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
									type="email"
									placeholder="Enter school email address"
									className="input-box"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>
						</>
					) : (
						<>
							<div className="form-field">
								<label htmlFor="name">Full Name</label>
								<input
									id="name"
									{...register("name", {
										required: "Full name is required",
									})}
									type="text"
									placeholder="Enter full name"
									className="input-box"
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-500">
										{errors.name.message}
									</p>
								)}
							</div>
							<div className="form-field">
								<label htmlFor="email">Email Address</label>
								<input
									id="email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: "Invalid email address",
										},
									})}
									type="email"
									placeholder="Enter email address"
									className="input-box"
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>
						</>
					)}

					<div className="form-field">
						<div className="space-y-1">
							<label htmlFor="password">Password</label>
							<div className="text-xs text-neutral-600">
								Password should be at least 8 characters long
								and should contain numbers and symbols
							</div>
						</div>
						<div className="flex flex-col pb-4">
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
								type={showPassword ? "text" : "password"}
								placeholder="Create a password"
								className="input-box"
							/>
							<div className="self-end mr-4 -mt-[36px] text-neutral-600 z-50">
								{ showPassword ?
									<FaRegEyeSlash size={20} onClick={() => setShowpassword(false)}/>:
								    <FaRegEye size={20} onClick={() => setShowpassword(true)}/>
							    }
							</div>
						</div>
						{errors.password && (
							<p className="mt-1 text-sm text-red-500">
								{errors.password.message}
							</p>
						)}
					</div>
				</div>

				<div className="space-y-2 text-sm text-neutral-600">
					<div>
						By signing up you agree to the terms and conditions of
						Talktu
					</div>
					<div className="flex items-center gap-2">
						<input
							type="checkbox"
							id="subscribeCheckbox"
							className="w-5 h-5 accent-retro_blue-main"
						/>
						<label htmlFor="subscribeCheckbox">
							I&apos;d like to receive weekly emails and updates
							from talktu
						</label>
					</div>
				</div>

				<button
					type="submit"
					disabled={isLoading}
					className="block text-center bg-sunglow-main w-3/5 min-[1060px]:w-full text-deep_blue font-semibold min-[1060px]:font-bold text-lg rounded-xl py-3 shadow-[0px_4px_0px] min-[1060px]:shadow-[0px_7px_0px] shadow-sunglow-900 min-[1060px]:shadow-sunglow-900 disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{isLoading ? (
						<div className="w-6 h-6 mx-auto border-2 rounded-full border-deep_blue border-t-transparent animate-spin" />
					) : (
						<>
							<span className="hidden min-[1060px]:block">
								Create Account
							</span>
							<span className="min-[1060px]:hidden">Next</span>
						</>
					)}
				</button>
				{/*<GoogleSignInButton
					text="Sign up with Google"
					onClick={handleGoogleSignIn}
					isLoading={isGoogleLoading}
				/>*/}
				<div className="space-y-2 text-xs text-center sm:text-sm text-neutral-600">
					<div className="pr-2">
						Already have an account?{" "}
						<Link
							href="/auth/login"
							className="font-medium text-retro_blue-main hover:underline"
						>
							Login
						</Link>
					</div>
				</div>
			</form>
		</>
	);
}
