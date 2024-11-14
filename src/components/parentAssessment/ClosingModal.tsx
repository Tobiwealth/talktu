import React from 'react'
import Image from 'next/image'
import congrats from '../../../public/icons/congrats.svg'
import Button from '@/components/Button'

const ClosingModal= () => {
	const handleClick =() =>{
		console.log("something")
	}
	return (
		<div className="min-h-screen max-h-full w-full flex flex-col items-center justify-center bg-[#EEF3FE] py-24 px-6 relative">
			<div className="w-full max-w-[670px] flex flex-col justify-center items-center gap-[10px] bg-[#FCFDFF] px-8 md:px-14 py-12 rounded-[22px] shadowbox">
				<div className="">
				    <Image src={congrats} width={122.35} height={113.22} quality={100} alt="congratulations" className="" />
				</div>
				<div className="font-nunito text-center mt-4">
					<h2 className="font-bold text-deep_blue text-2xl md:text-[2.5rem] md:leading-[52px]">Assessment completed Successfully</h2>
					<p className="font-normal text-base md:text-xl text-[#475569] py-4">
					    Thanks for your Interest In talktu. Your child’s Assessment report has been received. 
					    A member of our team is going through the report and we will send a 
					    mail with the assessment report to you within 24 hours
					</p>
				</div>
				<div className="mt-2">
					<Button title="Okay" onClick={handleClick} buttonClass="w-[15rem] h-[3.3rem]"/>
				</div>
			</div>
		</div>
	)
}

export default ClosingModal