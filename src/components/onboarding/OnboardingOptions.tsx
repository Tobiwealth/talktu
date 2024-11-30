import React from 'react'
import { FaCheck } from "react-icons/fa6";

interface OnboardingOptionsProps {
  onboardingStatusOption: boolean; 
  title: string;
  details: string | React.ReactNode;
  buttonTitle: string;
  handleClick: () => void;
}

const OnboardingOptions: React.FC<OnboardingOptionsProps> = ({onboardingStatusOption, title, details, buttonTitle, handleClick}) => {
	return(
		<div className="flex flex-col justify-between px-6 py-3 py-4 lg:flex-row lg:items-center gap-4 lg:gap-0">
		    <div className="flex items-center gap-4">
		    	<div className={`w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] border-[2px] border-[#518AF5] rounded-[100%] flex justify-center items-center ${onboardingStatusOption ? "bg-[#518AF5]" : "bg-white"}`}><FaCheck className="text-sm text-white lg:text-base "/></div>
		        <div className=" font-nunito">
		    	    <h3 className={`font-semibold text-base ${onboardingStatusOption ? "line-through text-[#2065E6]" : "#1E293B"}`}>{title}</h3>
		    	    <div className={`font-normal text-sm ${onboardingStatusOption ? "line-through text-[#2065E6]" : "#64748B"}`}>{details}</div>
		        </div>
		    </div>
		    <button onClick={handleClick} className={`font-nunito font-semibold text-[#000D26] text-sm bg-[#F1F5F9] w-[180px] h-[40px] rounded-[8px] ml-[40px] buttonshadow ${onboardingStatusOption ? 'hidden' : ""}`}>{buttonTitle}</button>
	    </div>
	)
}

export default OnboardingOptions