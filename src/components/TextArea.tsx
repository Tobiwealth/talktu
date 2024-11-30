import React from 'react'

interface InputProps {
	inputValue?: string | number | null;
	placeholder: string;
	label: string;
	setInput: React.Dispatch<React.SetStateAction<string | number | null >>;
}

const TextArea: React.FC<InputProps> = ({inputValue, setInput, placeholder, label}) => {
	return (
		<div className="flex flex-col w-full  gap-2">
		    <label htmlFor="input" className="text-lg font-semibold text-deep_blue font-nunito">{label}</label>
			<textarea name="desc" id="desc"
			    placeholder={placeholder}
			    className="
			        w-full md:w-[27rem] lg:w-[31.4rem] h-[7.125rem] bg-neutral-200 rounded-[12px] border-[1px] border-neutral-300 placeholder:text-neutral-600
			        placeholder:text-sm font-normal font-nunito text-base p-4 focus:bg-sunglow-100 focus:border-[1px] focus:border-sunglow-main focus:outline-none
			    "
			    value= {inputValue || ''}
			    onChange={(e) => setInput(e.target.value)}
			></textarea>
		</div>
	)
}

export default TextArea