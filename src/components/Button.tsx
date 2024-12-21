import React from 'react'

interface ButtonProps {
    title: string;
    buttonClass?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, buttonClass="", onClick}) => {
	return (
		<div className="w-full flex justify-center items-center">
			<button onClick={onClick} className={`rounded-[12px] h-[3.0rem] text-black font-nunito font-bold text-base bg-sunglow-main buttonshadow2 ${buttonClass}`}>{title}</button>
		</div>
	)
}

export default Button