import React from 'react'
import Image from 'next/image'
import dashboard_image from '../../../public/icons/dashboard_image.svg'
import kids from '../../../public/icons/kids.svg'
import Lock from '../../../public/icons/Lock.svg'

type Activity = {
  activityID: string;
  resources: string[];
};
type ActivityItem = {
  dayOfWeek: number;
  activities: Activity[];
  theme: string;
};

type WeeklyAssessmentProps = {
	activeWeek: number;
	activities: ActivityItem[];
}

const WeeklyAssessment: React.FC<WeeklyAssessmentProps> = ({activeWeek, activities}) => {
	const list = [1, 2, 3, 4, 5, 6, 7]

	return (
		<div className="flex justify-between py-8 gap-4">
			<div className="flex flex-col items-center">
				<div className="moduleBar w-2 h-[159px] rounded-t-[9px]"></div>
				<p className="font-nunito font-semibold text-base text-white bg-retro_blue-main w-[30px] h-[30px] text-center rounded-[100%] flex items-center justify-center">1</p>
				<div className="moduleBar w-2 h-[239px] "></div>
				<p className="font-nunito font-semibold text-base text-[#3A578E] bg-[#172C54] w-[30px] h-[30px] text-center rounded-[100%] flex items-center justify-center">2</p>
			    <div className="moduleBar w-2 h-[239px] "></div>
			    <p className="font-nunito font-semibold text-base text-[#3A578E] bg-[#172C54] w-[30px] h-[30px] text-center rounded-[100%] flex items-center justify-center">3</p>
			    <div className="moduleBar w-2 h-[239px] "></div>
			    <p className="font-nunito font-semibold text-base text-[#3A578E] bg-[#172C54] w-[30px] h-[30px] text-center rounded-[100%] flex items-center justify-center">4</p>
			    <div className="moduleBar w-2 h-[289px] "></div>
			    <p className="font-nunito font-semibold text-base text-[#3A578E] bg-[#172C54] w-[30px] h-[30px] text-center rounded-[100%] flex items-center justify-center">5</p>
			    <div className="moduleBar w-2 h-[269px] "></div>
			    <p className="font-nunito font-semibold text-base text-[#3A578E] bg-[#172C54] w-[30px] h-[30px] text-center rounded-[100%] flex items-center justify-center">6</p>
			    <div className="moduleBar w-2 h-[269px] "></div>
			    <p className="font-nunito font-semibold text-base text-[#3A578E] bg-[#172C54] w-[30px] h-[30px] text-center rounded-[100%] flex items-center justify-center">7</p>
			    <div className="moduleBar w-2 h-[179px] "></div>
			</div>
			<div className="flex flex-col gap-16">
				{ list.map((item, i) => <div 
					key={i} 
					className={` rounded-[24px] p-4 pb-6  ${item === activeWeek ? "border-[2px] border-[#518AF5]" : "relative" }`}
				>
				    <div className="aspect-video w-[252px] h-[148px] rounded-[11px] overflow-hidden ">
						<Image
							src={dashboard_image}
							width={208.6}
							height={191.09}
							quality={100}
							alt="dashboard image"
							className="rounded-[11px] w-full -mt-10"
				        />
			        </div>
			        <h3 className="mt-2 text-base font-semibold text-white font-nunito">{activities[i]?.theme}</h3>
			        <p className="text-sm font-normal font-nunito text-neutral-400">Unit {item}</p>
			        {item !== activeWeek && <div className="bg-[#0B1529BD] rounded-[24px] absolute w-full h-full inset-0 flex items-center justify-center">
			        	<Image src={Lock} width={34.17} height={36.9} quality={100} alt="lock" className="" />
			        </div>}
				</div>)}
			</div>
		</div>
	)
}

export default WeeklyAssessment