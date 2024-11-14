import React from 'react'
import { RxRadiobutton } from "react-icons/rx";
import { RiRadioButtonFill } from "react-icons/ri";

interface ProgressBarProps {
	step: number;
	level: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({step, level}) => {
	const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	return (
		<div className="w-full flex items-center">
		    {/*step 1*/}
			<div className="w-[calc(100%/7)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center">
				<div className={`w-1/5 h-[6px] rounded-l-[41px] ${step > 1 ? "bg-retro_blue-main" : step ===1 && level >=1 ? "bg-retro_blue-main" :"bg-neutral-300" }`}></div>
				<div className={`w-1/5 h-[6px] ${step > 1 ? "bg-retro_blue-main" : step ===1 && level >=2 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/5 h-[6px] ${step > 1 ? "bg-retro_blue-main" : step ===1 && level >=3 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/5 h-[6px] ${step > 1 ? "bg-retro_blue-main" : step ===1 && level >=4 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/5 h-[6px] ${step > 1 ? "bg-retro_blue-main" : step ===1 && level >=5 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
			</div>
			<div>{step <= 1 ? <RxRadiobutton className="text-neutral-300 text-xl"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 2*/}
			<div className="w-[calc(100%/7)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-1.9px]">
				<div className={`w-1/3 h-[6px] ${step > 2 ? "bg-retro_blue-main" : step ===2 && level >=1 ? "bg-retro_blue-main" :"bg-neutral-300" }`}></div>
				<div className={`w-1/3 h-[6px] ${step > 2 ? "bg-retro_blue-main" : step ===2 && level >=2 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/3 h-[6px] ${step > 2 ? "bg-retro_blue-main" : step ===2 && level >=3 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
			</div>
			<div>{step <= 2 ? <RxRadiobutton className="text-neutral-300 text-xl"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 3*/}
			<div className="w-[calc(100%/7)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className={`w-1/3 h-[6px] ${step > 3 ? "bg-retro_blue-main" : step ===3 && level >=1 ? "bg-retro_blue-main" :"bg-neutral-300" }`}></div>
				<div className={`w-1/3 h-[6px] ${step > 3 ? "bg-retro_blue-main" : step ===3 && level >=2 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/3 h-[6px] ${step > 3 ? "bg-retro_blue-main" : step ===3 && level >=3 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
			</div>
			<div>{step <= 3 ? <RxRadiobutton className="text-neutral-300 text-xl"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 4*/}
			<div className="w-[calc(100%/7)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className={`w-[calc(100%/7)] h-[6px] ${step > 4 ? "bg-retro_blue-main" : step ===4 && level >=1 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-[calc(100%/7)] h-[6px] ${step > 4 ? "bg-retro_blue-main" : step ===4 && level >=2 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-[calc(100%/7)] h-[6px] ${step > 4 ? "bg-retro_blue-main" : step ===4 && level >=3 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-[calc(100%/7)] h-[6px] ${step > 4 ? "bg-retro_blue-main" : step ===4 && level >=4 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-[calc(100%/7)] h-[6px] ${step > 4 ? "bg-retro_blue-main" : step ===4 && level >=5 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-[calc(100%/7)] h-[6px] ${step > 4 ? "bg-retro_blue-main" : step ===4 && level >=6 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-[calc(100%/7)] h-[6px] ${step > 4 ? "bg-retro_blue-main" : step ===4 && level >=7 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
			</div>
			<div>{step <= 4 ? <RxRadiobutton className="text-neutral-300 text-xl"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 5*/}
			<div className="w-[calc(100%/7)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				{list.map((item,i) => (
					<div key={item} className={`w-[calc(100%/20)] h-[6px] ${step > 5 ? "bg-retro_blue-main" : step ===5 && level >=item ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				))}
			</div>
			<div>{step <= 5 ? <RxRadiobutton className=" text-neutral-300 text-xl"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 6*/}
			<div className="w-[calc(100%/7)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className={`w-1/2 h-[6px] ${step > 6 ? "bg-retro_blue-main" : step ===6 && level >=1 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/2 h-[6px] ${step > 6 ? "bg-retro_blue-main" : step ===6 && level >=2 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
			</div>
			<div>{step <= 6 ? <RxRadiobutton className="text-neutral-300 text-xl"/>: <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 7*/}
			<div className="w-[calc(100%/7)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className={`w-1/3 h-[6px] ${step > 7 ? "bg-retro_blue-main" : step ===7 && level >=1 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/3 h-[6px] ${step > 7 ? "bg-retro_blue-main" : step ===7 && level >=2 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
				<div className={`w-1/3 h-[6px] ${step > 7 ? "bg-retro_blue-main" : step ===7 && level >=3 ? "bg-retro_blue-main" :"bg-neutral-300" } `}></div>
			</div>
			<div>{step <= 7 ? <RxRadiobutton className="text-neutral-300 text-xl"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
		</div>
	)
}

export default ProgressBar