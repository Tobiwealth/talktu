import React from 'react'
import InputBox from '@/components/InputBox'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'

interface inputObject{
	label: string;
	placeholder: string;
	textArea?:boolean
}
interface stepProps{
	step: number;
	level?: number;
	stepTitle: string | React.ReactNode;
	stepHeading: React.ReactNode;
	firstButton?: string;
	secondButton?: string;
	rating?: number;
	setRating?: React.Dispatch<React.SetStateAction<number>>;
	pickedOption?: string;
	setPickedOption?: React.Dispatch<React.SetStateAction<string>>;
	onClick: () => void;
	input?: inputObject;
}

const StepComponent: React.FC<stepProps> = ({stepTitle, step,level, stepHeading, firstButton, secondButton, rating, setRating, input, onClick,pickedOption, setPickedOption}) => {
	const list = [1,2,3,4,5,6,7,8,9,10] 

	const handleOptionButton = (option:string) => { //this function sets the value for yes/no and gender questions
		if(option && setPickedOption){
			setPickedOption(option)
		}
	}

	const handleRating = (rate:number) => { //this function sets the rating for the rating questions
		if(rate && setRating){
			setRating(rate)
			//console.log(rate);
		}
	}


	return (
		<section className="flex flex-col items-center justify-center gap-6 lg:gap-8 mt-6 w-full ">
		    <div className="text-center mb-2 ">
			    <p className="font-nunito font-semibold text-base text-neutral-600">Step {step}</p>
			    <p className="font-nunitosans font-bold text-base md:text-xl lg:text-2xl text-[#3D7CF1] pt-2">{stepTitle}</p>
			</div>
			<h1 className="font-nunito font-bold text-2xl md:text-[1.5rem] lg:text-[2.0rem] xl:text-[2.4rem] text-deep_blue text-center md:leading-[32px] lg:leading-[52px] px-3 md:px-8 lg:px-12">{stepHeading}</h1>
			<div className={`flex items-center gap-4 pt-2 ${firstButton && secondButton ? "" : "hidden"}`}>
				<button onClick={() => handleOptionButton(firstButton || "")} className={`font-nunito font-semibold text-xl text-deep_blue w-[109px] h-[56px] lg:w-[127px] lg:h-[68px] rounded-[13px] ${pickedOption === firstButton ? "bg-retro_blue-300": "bg-neutral-200" }`}>{firstButton}</button>
				<button onClick={() => handleOptionButton(secondButton || "")} className={`font-nunito font-semibold text-xl text-deep_blue w-[109px] h-[56px] lg:w-[127px] lg:h-[68px] rounded-[13px] ${pickedOption === secondButton ? "bg-retro_blue-300": "bg-neutral-200" }`}>{secondButton}</button>
			</div>
			<div className={`${input?.label ? "" : "hidden"} w-full px-4 md:px-0 md:w-fit`}>
				<div className={input?.textArea ? "hidden": ""}><InputBox label={input?.label || ""} placeholder={input?.placeholder || ""} inputValue="" onChange={() => console.log("yes")}/></div>
				<div className={input?.textArea ? "": "hidden"}><TextArea label={input?.label || ""} placeholder={input?.placeholder || ""} inputValue="" onChange={() => console.log("yes")}/></div>
			</div>
			{rating && <div className="flex flex-col gap-4 py-3 px-3 mt-2">
				<div className="flex items-center gap-2 md:gap-3">
					{
						list.map(item => (
							<button key={item} 
							    onClick={() => handleRating(item)}
							    className={`font-nunito font-semibold text-xs md:text-sm lg:text-xl text-deep_blue w-[26.61px] h-[30.74px] md:w-[44px] md:h-[56px] lg:w-[54px] lg:h-[62px] rounded-[6.41px] md:rounded-[13px] ${rating === item ? "bg-retro_blue-300": "bg-neutral-200"}`}
							>{item}</button>
					))}
				</div>
				<div className="flex justify-between items-center">
					<p className="font-nunito font-semibold text-black text-xs lg:text-xl ">Bad</p>
					<p className="font-nunito font-semibold text-black text-xs lg:text-xl ">Fair</p>
					<p className="font-nunito font-semibold text-black text-xs lg:text-xl ">Good</p>
				</div>
			</div>}
			<div className="pt-4">
				<Button title={step === 7 && level === 3 ? "Submit": "Proceed"} onClick={onClick} buttonClass="w-[15rem] h-[3.3rem]"/>
			</div>
		</section>
	)
}

export default StepComponent