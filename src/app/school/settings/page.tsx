'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import WhiteButton from '@/components/WhiteButton'
import { GoDotFill } from "react-icons/go";
import visa_card from '../../../../public/icons/visa_card.svg'
import support_doc from '../../../../public/images/support_doc.svg'

const Settings = () => {
	return (
		<div className="min-h-screen mt-8 lg:mt-28 px-6 md:px-8 lg:px-0 pr-8 w-full flex flex-col gap-6 pb-16">
			<div className="bg-[#112349] rounded-[12px] py-4 px-4 md:px-8 flex flex-col gap-6 md:w-full lg:w-[90%] xl:w-[80%]">
				<h2 className="font-nunito font-semibold text-white text-lg md:text-xl lg:py-2">Subscription Details</h2>
				<div className="font-ninito font-medium text-sm text-retro_blue-700 flex flex-col gap-4 bg-[#1B3262] rounded-[14px] p-3 md:p-6">
					<h3 className="text-base font-bold text-white">Subscription Plan</h3>
					<p>Current Plan:  Pro Plan</p>
					<p>Frequency:  Yearly</p>
					<div className="flex md:gap-2">
					    <p>Payment Method:</p>
					    <p className="flex gap-1 md:gap-2 text-[8px] md:text-sm">
					        <Image src={visa_card} width={32} height={18} quality={100} alt="visa card" className="scale-75" />
					        <span className=" font-bold flex items-center"><GoDotFill /><GoDotFill /><GoDotFill /><GoDotFill /></span>
					        <span className=" font-bold flex items-center"><GoDotFill /><GoDotFill /><GoDotFill /><GoDotFill /></span> 
					        <span className="text-sm">4567</span>
					    </p>
					</div>
					<p className="text-white font-semibold bg-[#29488B] rounded-[12px] py-[10px] px-4 w-fit">Your next bill is NGN15,000 On 10th march 2025</p>
				</div>
				<div className="flex items-center justify-start w-fit gap-4 pb-4">
					<WhiteButton title="Cancel Plan" buttonClass="w-[144px] md:w-[168px] h-[42.51px] font-semibold text-deep_blue text-sm" onClick={() => console.log("")}/>
					<Button title="Upgrade" buttonClass="w-[144px] md:w-[168px] h-[42.51px] font-semibold text-deep_blue text-sm" onClick={() => console.log("")}/>
				</div>
			</div>
			<div className="bg-[#112349] rounded-[12px] py-4 px-4 md:px-8 flex flex-col gap-6 md:w-full lg:w-[90%] xl:w-[80%]">
				<h2 className="font-nunito font-semibold text-white text-xl">Verification details</h2>
				<div className="flex flex-col gap-5 font-nunito">
					<div className="flex flex-col gap-2">
						<label className="font-medium text-retro_blue-700 text-base" htmlFor="fullname">School Address</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    placeholder="School address"
						    name="fullname"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-medium text-retro_blue-700 text-base" htmlFor="email">Official school email adress</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="email"
						    placeholder="talktu@school.com"
						    name="email"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-medium text-retro_blue-700 text-base" htmlFor="phoneNumber">Official school Phone number</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    placeholder="090876543369"
						    name="phoneNumber"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-medium text-retro_blue-700 text-base" htmlFor="state">State</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    placeholder="Lagos"
						    name="state"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-medium text-retro_blue-700 text-base" htmlFor="lga">LGA</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="text"
						    placeholder="Lagos Mainland"
						    name="lga"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-medium text-retro_blue-700 text-base" htmlFor="doc">Supporting document</label>
						<Image
							src={support_doc}
							width={266}
							height={189}
							quality={100}
							alt="Supporting document"
							className="rounded-[9px]"
				        />
					</div>
					
					<div className="flex items-center justify-start w-fit gap-4 pb-4 mt-2">
					    <Button title="Update" buttonClass="w-[144px] md:w-[168px] h-[42.51px] font-semibold text-deep_blue text-sm" onClick={() => console.log("")}/>
				    </div>
				</div>
			</div>
			<div className="bg-[#112349] rounded-[12px] px-4 md:px-8 py-6 flex flex-col gap-6 md:w-full lg:w-[90%] xl:w-[80%]">
			    <button onClick={() => console.log("yes")} className="rounded-[12px] w-[168px] h-[42.51px] text-white font-nunito font-semibold text-sm bg-red-600 buttonshadow-red">Delete Account</button>
			</div>
		</div>
	)
}

export default Settings