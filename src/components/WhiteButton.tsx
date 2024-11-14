import React from 'react'

interface ButtonProps {
    title: string;
    buttonClass?: string;
    onClick: () => void;
}

const WhiteButton: React.FC<ButtonProps> = ({title, buttonClass="", onClick}) => {
	return (
		<div className="w-full">
			<button onClick={onClick} className={`rounded-[12px] h-[3.0rem] text-black font-nunito font-bold text-base bg-neutral-200 buttonshadow-white ${buttonClass}`}>{title}</button>
		</div>
	)
}

export default WhiteButton