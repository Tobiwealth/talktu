import React from "react";
import Button from "@/components/Button";

interface ModalProps {
	handleClick: () => void;
	activityDetails: {
		description: string;
		instruction: string;
	}
}

const ActivityModal: React.FC<ModalProps> = ({  handleClick, activityDetails }) => {

	//console.log(activityDetails)
	return (
		<div className="flex justify-center items-center w-full p-8 bg-[#020A1A94] absolute inset-0 lg:py-10">
			<div className="flex flex-col items-center gap-[46px] w-full max-w-[678px] px-8 md:px-16 lg:px-[76px] bg-[#112349] rounded-[35px] pb-12">
				<div className="bg-[#518AF5] rounded-b-[32px] w-fit px-16 md:px-24 py-3">
					<p className="text-white font-nunito font-bold text-xl md:text-2xl">
						Lesson 1
					</p>
				</div>
				<div className="font-nunito text-white text-center">
					<h3 className="font-bold text-2xl">Activity Focus</h3>
					<p className="font-normal text-base pt-1">
						{activityDetails?.description}
					</p>
				</div>
				<div className="font-nunito text-white text-center">
					<h3 className="font-bold text-2xl">Goal</h3>
					<p className="font-normal text-base pt-1">
						{activityDetails?.instruction}
					</p>
				</div>
				<div className="flex justify-center items-center">
					<Button
						title="Start"
						buttonClass="text-deep_blue w-[240px] h-[56.68px]"
						onClick={handleClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default ActivityModal;
