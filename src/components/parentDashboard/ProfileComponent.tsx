'use client'
import React from 'react'
import Image from 'next/image'
import kid_avatar from '../../../public/icons/kid_avatar.svg'
import { AiOutlinePlus } from "react-icons/ai";
import Button from '@/components/Button'
import WhiteButton from '@/components/WhiteButton'

const ProfileComponent = () => {
	return (
		<div className="w-full min-h-screen px-8 mt-8 lg:mt-28 lg:px-0 lg:pr-8">
			<div className="flex gap-4">
				<div className="flex flex-col justify-center items-center gap-2 border-[2px] border-retro_blue-main bg-[#112349] p-4 rounded-[8px]">
					<Image
						src={kid_avatar}
						width={70}
						height={70}
						quality={100}
						alt="profile"
						className="rounded-full"
				    />
				    <p className="text-sm font-semibold text-white font-nunito">Sammy</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-2 bg-[#112349] p-4 rounded-[8px]">
					<div  className="border-[3px] border-[#0E357E] p-3 rounded-full bg-[#15294F] w-[70px] h-[70px] flex justify-center items-center">
					    <AiOutlinePlus className="text-3xl text-retro_blue-main" />
					</div>
				    <p className="text-sm font-semibold text-white font-nunito">Add a child</p>
				</div>
			</div>
			<div className="font-nunito rounded-[16px] bg-[#112349] mt-5 p-8 md:w-full lg:w-[90%] xl:w-[80%] flex flex-col gap-6">
				<h3 className="text-lg font-semibold text-white md:text-xl">Edit Profile</h3>
				<div className="flex flex-col items-center justify-center w-fit gap-2">
					<Image
						src={kid_avatar}
						width={70}
						height={70}
						quality={100}
						alt="profile"
						className="rounded-full"
				    />
				    <p className="font-nunito font-medium text-xs text-retro_blue-main bg-[#15294F] border-[1px] border-[#2D4675] rounded-[9px] py-1 px-[10px]">Change Avatar</p>
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="fullname">Full Name</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    placeholder="Sam Keating"
						    name="fullname"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="phoneNumber">Phone number</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    placeholder="08000000"
						    name="phoneNumber"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="email">Email Address</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="email"
						    placeholder="Sammy@gmail.com"
						    name="email"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="password">Password</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="password"
						    placeholder="*******"
						    name="password"
						/>
					</div>
					<div className="flex items-center justify-start pb-4 mt-4 w-fit gap-4">
					    <WhiteButton title="Change Password" buttonClass="w-[144px] md:w-[168px] h-[42.51px] font-semibold text-deep_blue text-sm" onClick={() => console.log("")}/>
					    <Button title="Update" buttonClass="w-[168px] h-[42.51px] font-semibold text-deep_blue text-sm" onClick={() => console.log("")}/>
				    </div>
				</div>
			</div>
		</div>
	)
}

export default ProfileComponent