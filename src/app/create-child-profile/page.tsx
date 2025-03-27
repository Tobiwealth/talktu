"use client";
import axios from "@/api/useAxios";
import NavHeader from "@/components/NavHeader";
import { getCookie } from "cookies-next";
import { useChildStore } from "@/store/childStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
	fullName: string;
	nickname: string;
	birthdate: Date;
	gender: string;
}

export default function CreateChildProfile() {
	const addChild = useChildStore((state) => state.addChild);
	const token = getCookie("token");
	const router = useRouter();
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);

		try {
			const response = await axios.post(
				"children",
				JSON.stringify(data),
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					// withCredentials: true
				}
			);
			console.log(response.data);
			await addChild({
				fullName: response?.data.fullName,
				nickname: response?.data?.nickname,
				childId: response?.data?._id,
				childrenId: response?.data?.parent?.children,
				parentId: response?.data?.parent?._id,
			});
			router.push(
				`/onboarding?user=parent&childId=${response?.data?._id}`
			);
		} catch (err) {
			console.log(err);
		}
	});

	return (
		<div className="relative flex flex-col w-screen min-h-screen overflow-hidden bg-retro_blue-100">
			<NavHeader backLink />
			<div className="relative flex justify-center flex-1 px-4 pt-16 overflow-hidden md:pt-10">
				<div className="relative z-50 bg-white rounded-3xl w-full shadow-[0px_12px_0px] shadow-retro_blue-400 h-fit flex flex-col px-4 sm:px-8 py-12 gap-9 max-w-[450px] self-start lg:max-w-[533px] lg:px-8 min-[1300px]:scale-[0.9] sm:scale-[0.8]">
					<form onSubmit={onSubmit} className="space-y-6">
						<div className="space-y-6">
							<div className="size-[100px] rounded-[25px] bg-[#CBDCFC] mx-auto lg:size-[120px] flex justify-center items-center">
								<Image
									src={"/images/add_user.svg"}
									alt="Add user"
									width={50}
									height={50}
									className="w-[45px] md:w-[60px]"
								/>
							</div>
							<h2 className="text-2xl font-bold text-center lg:text-3xl text-dark-800 font-nunitosans">
								Create child’s profile
							</h2>
						</div>
						<div className="space-y-6">
							<div className="form-field">
								<label htmlFor="fullName">
									Child’s full name
								</label>
								<input
									id="fullName"
									{...register("fullName", {
										required:
											"Child's full name is required",
									})}
									type="text"
									placeholder="Enter full name"
									className="input-box"
								/>
								{errors.fullName && (
									<p className="mt-1 text-sm text-red-500">
										{errors.fullName.message}
									</p>
								)}
							</div>
							<div className="form-field">
								<label htmlFor="nickname">
									Choose a Nickname
								</label>
								<input
									id="nickname"
									{...register("nickname", {
										required: "Nickname is required",
									})}
									type="text"
									placeholder="Enter a nickname"
									className="input-box"
								/>
								{errors.nickname && (
									<p className="mt-1 text-sm text-red-500">
										{errors.nickname.message}
									</p>
								)}
							</div>
							<div className="form-field">
								<label htmlFor="nickname">
									Select your child's gender
								</label>
								<select 
								    id="gender"
								    {...register("gender", { required: "Gender is required" })}
								    className="input-box"
								>
							        <option value="">Select a Gender</option>
							        <option value="male">Male</option>
							        <option value="female">Female</option>
							    </select>
							    {errors.gender && (
									<p className="mt-1 text-sm text-red-500">
										{errors.gender.message}
									</p>
								)}
							</div>
							<div className="form-field">
								<label htmlFor="birthdate">
									Select your child's date of birth
								</label>
								<input 
								    id="birthdate"
								    type="date" 
								    min="2014-01-01"
								    {...register("birthdate", { required: "Date of birth is required" })} 
								    className="input-box"
								/>
							    {errors.birthdate && (
									<p className="mt-1 text-sm text-red-500">
										{errors.birthdate.message}
									</p>
								)}
							</div>
						</div>
						<button className="block text-center form-btn">
							Create Profile
						</button>
					</form>
				</div>
				{/* <SuccessModal
					title="Payment Received"
					description="Login to your account to access your Sammy’s learning plan"
					CTA="Log In"
					redirectTo="/auth/login"
				/> */}
				<Image
					src={"/images/pill.svg"}
					alt="bg-icon-1"
					width={100}
					height={100}
					className="hidden lg:block absolute top-8 left-0 z-10 w-[120px]"
				/>
				<Image
					src={"/images/star2.svg"}
					alt="bg-icon-3"
					width={100}
					height={100}
					className="absolute right-0 z-10 hidden w-auto lg:block -top-5"
				/>
				<Image
					src={"/images/tube2.svg"}
					alt="bg-icon-2"
					width={100}
					height={100}
					className="absolute bottom-0 right-0 z-10 hidden w-auto lg:block"
				/>
				<Image
					src={"/images/periwinkle2.svg"}
					alt="bg-icon-4"
					width={100}
					height={100}
					className="hidden lg:block absolute bottom-0 -left-16 z-10 size-[300px]"
				/>
			</div>
			<Image
				src={"/images/bg-icon-1.svg"}
				alt="bg-icon-1"
				width={100}
				height={100}
				className="lg:hidden absolute -top-5 left-0 z-10 w-[70px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-2.svg"}
				alt="bg-icon-2"
				width={100}
				height={100}
				className="lg:hidden absolute z-10 -right-2 -top-7 w-[80px] sm:w-auto"
			/>
			<Image
				src={"/images/bg-icon-3.svg"}
				alt="bg-icon-3"
				width={100}
				height={100}
				className="absolute z-10 w-auto lg:hidden -bottom-20 -left-10 sm:bottom-0 sm:left-0"
			/>
			<Image
				src={"/images/bg-icon-4.svg"}
				alt="bg-icon-4"
				width={100}
				height={100}
				className="lg:hidden absolute -bottom-5 -right-16 z-10 size-[200px] sm:size-auto sm:bottom-0 sm:right-0"
			/>
		</div>
	);
}
