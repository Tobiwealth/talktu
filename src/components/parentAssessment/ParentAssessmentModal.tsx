import React from 'react'
import Button from '@/components/Button'
import BackgroundComponent2 from '@/components/BackgroundComponent2'

interface ModalProps{
	handleClick: () => void;
}

const ParentAssessmentModal:React.FC<ModalProps> = ({handleClick}) => {
	return (
		<div className="min-h-screen py-24 bg-[#EEF3FE]">
			<div className="flex flex-col items-center justify-center w-full h-full p-8 md:p-32 lg:p-0 ">
				<div className="flex flex-col justify-center items-center w-full lg:w-[533px] text-center gap-6 rounded-[24px] bg-white p-8 shadowbox2">
					<div className="w-[112px] h-[114px] rounded-[30px] bg-neutral-200"></div>
					<h2 className="font-nunitosans font-bold text-deep_blue text-2xl lg:text-[2rem] leading-[34.88px]">Online Speech Therapy <br/>Assessment</h2>
					<p className="text-sm font-medium text-neutral-700 font-nunito md:text-base lg:text-lg">
					    Please fill out the following assessment tool to the best of your ability. 
					    Your detailed responses will help us tailor our speech therapy program to meet the specific needs of your child. 
					    For questions requiring a numerical rating, use a scale of 1-10, 
					    where 1 indicates the lowest level and 10 indicates the highest level. For other questions, 
					    please provide specific details where applicable.
					</p>
					<Button title="Start Assessment" onClick={handleClick} buttonClass="w-full h-[3.5rem]"/>
				</div>
			</div>
			{/*<BackgroundComponent2/>*/}
		</div>
	)
}

export default ParentAssessmentModal