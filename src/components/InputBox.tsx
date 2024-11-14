
import React from 'react'

interface InputProps {
	inputValue: string;
	placeholder: string;
	label: string;
	onChange: () => void;
}

const InputBox: React.FC<InputProps> = ({inputValue, onChange, placeholder, label}) => {

	return (
		<div className=" flex flex-col gap-2 w-full ">
		   <label htmlFor="input" className="text-deep_blue font-nunito font-semibold text-base">{label}</label>
			<input 
			    type="text"
			    placeholder={placeholder}
			    className="
			        w-full md:w-[27rem] lg:w-[31.4rem] h-[3.5rem] bg-neutral-200 rounded-[12px] border-[1px] border-neutral-300 placeholder:text-neutral-600
			        placeholder:text-sm font-normal font-nunito text-base px-4 focus:bg-sunglow-100 focus:border-[1px] focus:border-sunglow-main focus:outline-none
			    "
			    value= {inputValue}
			    onChange={onChange}
			/>
		</div>
	)
}

export default InputBox