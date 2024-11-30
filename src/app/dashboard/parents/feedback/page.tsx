'use client'
import React from 'react'
import Button from '@/components/Button'

const Feedback = () => {
	return (
		<div className="w-full min-h-screen px-8 pr-8 mt-8 lg:mt-24 lg:px-0">
			<div className="font-nunito rounded-[16px] bg-[#112349] mt-5 p-8 md:w-full lg:w-[90%] xl:w-[80%] flex flex-col gap-6">
				<h2 className="text-lg font-semibold text-white md:text-xl">Share your feedback</h2>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-1">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="email">Email Address</label>
						<input 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[3.125rem] placeholder:text-sm placeholder:text-neutral-500 px-4 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    type="email"
						    placeholder="janedoe@gmaill.com"
						    name="email"
						/>
					</div>
					<div className="flex flex-col mb-3 gap-1">
						<label className="text-base font-medium text-retro_blue-700" htmlFor="feedback">Feedback</label>
						<textarea 
						    className="bg-[#15294F] border-[1px] border-[#2D4675] rounded-[12px] h-[9.25rem] placeholder:text-sm placeholder:text-neutral-500 px-4 py-3 text-retro_blue-700 focus:border-[2px] focus:outline-none focus:border-retro_blue-main" 
						    placeholder="Sam Keating"
						    name="feedback"
						></textarea>
					</div>
					<Button title="Send" buttonClass="w-[168px] h-[42.51px] font-semibold text-deep_blue text-sm" onClick={() => console.log("")}/>
				</div>
			</div>
		</div>
	)
}

export default Feedback