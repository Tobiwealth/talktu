import React, {useState} from 'react'
import InputBox from '@/components/InputBox'
import Button from '@/components/Button'
import { GoChevronDown } from "react-icons/go";

interface StepOneProps{
	onClick: () => void
}

const StepOne: React.FC<StepOneProps> = ({onClick}) => {
	interface ActiveBox{
		month: boolean,
		day: boolean,
		year: boolean
	}
	const [toggleArrow, setToggleArrow] = useState<ActiveBox>({
		month: false,
		day: false,
		year: false
	});

	const months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
	const Day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
	const year = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]

	const [selectedDay, setSelectedDay] = useState<number | null>(null);
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
	const [selectedYear, setSelectedYear] = useState<number | null>(null);

	return (
		<section className={`flex flex-col items-center justify-center gap-8 mt-6 ${toggleArrow.day || toggleArrow.month || toggleArrow.year ? "" : ""}`}>
		    <div className="text-center mb-2">
			    <p className="font-nunito font-semibold text-base text-neutral-600">Step 1</p>
			    <p className="font-nunitosans font-bold text-base md:text-xl lg:text-2xl text-[#3D7CF1] pt-2">Demographic Details</p>
			</div>
			<h1 className="font-nunito font-bold text-2xl md:text-[1.5rem] lg:text-[2.0rem] xl:text-[2.4rem] text-deep_blue text-center md:leading-[32px] lg:leading-[52px]">What is your Child’s <br/>date of Birth?</h1>
			<div className="flex justify-center items-center gap-4">
				<div className="flex flex-col items-center pt-2 relative">
					<div className="flex justify-center items-center gap-2 font-nunito font-semibold text-sm text-neutral-800 w-[104.05px] h-[50px] bg-neutral-200 rounded-[13px] border-[1px] border-neutral-300">
					    <span>{selectedMonth ? selectedMonth : "Month"}</span> 
					    <GoChevronDown
					        onClick={() => setToggleArrow({...toggleArrow, month:!toggleArrow.month})} 
					        className={`text-neutral-500 text-[21px] cursor-pointer text-center ${toggleArrow.month ? " rotate-180 duration-500 ease-in-out" :" rotate-0 duration-500 ease-in-out" }`}
					    />
					</div>
					{toggleArrow.month && <div className="bg-white rounded-[10px] dropdownshadow w-[104.05px] h-[300px] text-center flex flex-col gap-1 py-4 absolute top-[70px] overflow-y-scroll">
						{
							months.map((item,i) => (<p key={i} onClick={() =>{setToggleArrow({...toggleArrow, month:false}); setSelectedMonth(item)}} className={`font-nunito font-medium text-lg text-neutral-800 py-2 cursor-pointer ${selectedMonth === item ? "bg-retro_blue-300": ""}`}>{item}</p>
						))}
					</div>}
				</div>
				<div className="flex flex-col items-center pt-2 relative">
					<div className="flex justify-center items-center gap-2 font-nunito font-semibold text-sm text-neutral-800 w-[104.05px] h-[50px] bg-neutral-200 rounded-[13px] border-[1px] border-neutral-300">
					    <span>{selectedDay ? selectedDay : "Day"}</span> 
					    <GoChevronDown
					        onClick={() => setToggleArrow({...toggleArrow, day:!toggleArrow.day})} 
					        className={`text-neutral-500 text-[21px] cursor-pointer text-center ${toggleArrow.day ? " rotate-180 duration-500 ease-in-out" :" rotate-0 duration-500 ease-in-out" }`}
					    />
					</div>
					{toggleArrow.day && <div className="bg-white rounded-[10px] dropdownshadow w-[104.05px] h-[300px] text-center flex flex-col gap-1 py-4 absolute top-[70px] overflow-y-scroll">
						{
							Day.map((item,i) => (<p key={i} onClick={() =>{setToggleArrow({...toggleArrow, day:false}); setSelectedDay(item)}} className={`font-nunito font-medium text-lg text-neutral-800 py-2 cursor-pointer ${selectedDay === item ? "bg-retro_blue-300": ""}`}>{item}</p>
						))}
					</div>}
				</div>
				<div className="flex flex-col items-center pt-2 relative">
					<div className="flex justify-center items-center gap-2 font-nunito font-semibold text-sm text-neutral-800 w-[104.05px] h-[50px] bg-neutral-200 rounded-[13px] border-[1px] border-neutral-300">
					    <span>{selectedYear ? selectedYear : "Year"}</span> 
					    <GoChevronDown
					        onClick={() => setToggleArrow({...toggleArrow, year:!toggleArrow.year})} 
					        className={`text-neutral-500 text-[21px] cursor-pointer text-center ${toggleArrow.year ? " rotate-180 duration-500 ease-in-out" :" rotate-0 duration-500 ease-in-out" }`}
					    />
					</div>
					{toggleArrow.year && <div className="bg-white rounded-[10px] dropdownshadow w-[104.05px] h-[300px] text-center flex flex-col gap-1 py-4 absolute top-[70px] overflow-y-scroll">
						{
							year.map((item,i) => (<p key={i} onClick={() =>{setToggleArrow({...toggleArrow, year:false}); setSelectedYear(item)}} className={`font-nunito font-medium text-lg text-neutral-800 py-2 cursor-pointer ${selectedYear === item ? "bg-retro_blue-300": ""}`}>{item}</p>
						))}
					</div>}
				</div>
			</div>
			<div className="pt-4">
				<Button title="Proceed" onClick={onClick} buttonClass="w-[15rem] h-[3.3rem]"/>
			</div>
		</section>
	)
}

export default StepOne