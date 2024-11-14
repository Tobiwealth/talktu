"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";


export default function Login() {
	const inputRef = useRef<HTMLInputElement | null>(null);



	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div className="flex flex-col w-screen h-screen bg-retro_blue-100">
			<div className="hidden md:flex justify-center bg-retro_blue-300 items-center h-[82px]">
				<Image
					src="/images/logo-dark.svg"
					alt="talktu"
					width={100}
					height={100}
					className="w-24"
				/>
			</div>
			<div className="relative flex justify-center flex-1 overflow-hidden xl:items-center px-4 pt-16 md:pt-24 xl:pt-0">
				<div className="relative z-50 space-y-4 auth-box min-[1300px]:scale-[0.9] sm:scale-[0.8] max-sm:rounded-2xl max-sm:px-4">
					<div className="space-y-2">
						<h2 className="text-2xl font-bold sm:text-4xl text-dark-800 font-nunitosans">
							Welcome back, Sign In
						</h2>
						<p className="text-neutral-700 font-nunito max-w-[428px] text-sm sm:text-base ">
							Enter your email address and password to continue
						</p>
					</div>
					<form className="space-y-6" >
						<div className="space-y-4">
							<div className="form-field">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									id="email"
									ref={inputRef}
									placeholder="Enter email address"
									className="input-box"
								/>
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
									type="password"
									id="password"
									placeholder="Create Password"
									className="input-box"
								/>
							</div>
						</div>
						<div className="space-y-2 text-xs sm:text-sm text-neutral-600">
							<div className="pr-2">
								By signing up you agree to the terms and
								conditions of Talktu
							</div>
							<div className="flex items-center gap-2">
								<input
									type="checkbox"
									id="subscribeCheckbox"
									className="w-5 h-5 accent-retro_blue-main"
								/>
								<label htmlFor="subscribeCheckbox">
									I’d like to receive weekly emails and
									updates from talktu
								</label>
							</div>
						</div>
						<button className="form-btn" type="submit">
							Create Account
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
