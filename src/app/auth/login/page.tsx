"use client";
import { on } from "events";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "@/api/useAxios";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { AxiosError } from 'axios';


interface FormData {
	email: string;
	password: string;
}

export default function Login() {
    const addAuth = useAuthStore((state) => state.addAuth);
    const [errMsg, setErrMsg] = useState<string>("");
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
		try {
            const response = await axios.post('/authentication',
                JSON.stringify({
                	strategy:'local', 
                	email: data.email, 
                	password: data.password 
                }),
                {
                    headers: { 'Content-Type': 'application/json' }
                    // withCredentials: true
                }
            );
            console.log(response.data.accessToken);
            addAuth(response.data.accessToken);
            router.push(`/onboarding?user=${response.data.user.role}`)
        } catch (err) {
        	const axiosError = err as AxiosError;
            console.log(axiosError);
            if (!axiosError?.response) {
                setErrMsg('No Server Response');
            } else if (axiosError?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (axiosError?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
	});

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
				<div className="relative z-50 space-y-4 auth-box min-[1300px]:scale-[0.9] sm:scale-[0.8] max-sm:rounded-2xl max-sm:px-4">
					<div className="space-y-2">
						<h2 className="text-2xl font-bold sm:text-4xl text-dark-800 font-nunitosans">
							Welcome back, Sign In
						</h2>
						<p className="text-neutral-700 font-nunito max-w-[428px] text-sm sm:text-base ">
							Enter your email address and password to continue
						</p>
					</div>
					{errMsg && <p className="font-nunito font-normal text-sm text-[#DC143C]">{errMsg}</p>}
					<form onSubmit={onSubmit} className="space-y-6">
						<div className="space-y-4">
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
							<div className="form-field">
								<div className="space-y-1">
									<label htmlFor="password">Password</label>
									<div className="text-xs text-neutral-600">
										Password should be at least 8 characters
										long and should contain numbers and
										symbols
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
									placeholder="Enter password"
									className="input-box"
								/>
								{errors.password && (
									<p className="mt-1 text-sm text-red-500">
										{errors.password.message}
									</p>
								)}
							</div>
						</div>

						<button
							className="block text-center form-btn"
							type="submit"
						>
							Sign In
						</button>
					</form>
					<div className="space-y-2 text-xs text-center sm:text-sm text-neutral-600">
						<div className="pr-2">
							Don&apos;t have an account?{" "}
							<Link
								href="/auth/signup"
								className="font-medium text-retro_blue-main hover:underline"
							>
								Sign up
							</Link>
						</div>
						{/* <Link
							href="/auth/forgot-password"
							className="pr-2 underline"
						>
							Forgot your password?
						</Link> */}
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
