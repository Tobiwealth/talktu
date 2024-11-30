import React from 'react'
import { RxRadiobutton } from "react-icons/rx";
import { RiRadioButtonFill } from "react-icons/ri";

interface ProgressBarProps {
	step: number;
	level: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({step, level}) => {
	const list = [1,2,3,4,5,6,7];
	return (
		<div className="flex items-center rounded-l-[41px] w-full">
		    {/*step 1*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center">
				<div className="h-[6px] rounded-l-[41px] bg-retro_blue-main" style={{width:`${step > 1 ? 100: step < 1 ? 0 : level*(100/6)}%`}}></div>
			</div>
			<div>{step <= 1 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 2*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-1.9px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 2 ? 100: step < 2 ? 0 : level*(100/3)}%`}}></div>
			</div>
			<div>{step <= 2 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 3*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 3 ? 100: step < 3 ? 0 : level*(100/7)}%`}}></div>
			</div>
			<div>{step <= 3 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 4*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 4 ? 100: step < 4 ? 0 : level*(100/6)}%`}}></div>
			</div>
			<div>{step <= 4 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 5*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 5 ? 100: step < 5 ? 0 : level*(100/7)}%`}}></div>
			</div>
			<div>{step <= 5 ? <RxRadiobutton className="text-xl  text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 6*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 6 ? 100: step < 6 ? 0 : level*50}%`}}></div>
			</div>
			<div>{step <= 6 ? <RxRadiobutton className="text-xl text-neutral-300"/>: <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 7*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 7 ? 100: step < 7 ? 0 : level*(100/3)}%`}}></div>
			</div>
			<div>{step <= 7 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
			{/*step 8*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 8 ? 100: step < 8 ? 0 : level*50}%`}}></div>
			</div>
			<div>{step <= 8 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
		{/*step 9*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 9 ? 100: step < 9 ? 0 : level*50}%`}}></div>
			</div>
			<div>{step <= 9 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
		{/*step 10*/}
			<div className="w-[calc(100%/10)] h-[6px] bg-neutral-300 rounded-l-[41px] flex items-center ml-[-2px]">
				<div className="h-[6px] bg-retro_blue-main" style={{width:`${step > 10 ? 100: step < 10 ? 0 : level*(100/3)}%`}}></div>
			</div>
			<div>{step <= 10 ? <RxRadiobutton className="text-xl text-neutral-300"/> : <RiRadioButtonFill className="text-retro_blue-main ml-[-2px] z-50 text-xl"/>}</div>
		</div>
	)
}

export default ProgressBar