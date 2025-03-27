'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import feedback_star1 from "../../../../../../../public/icons/feedback_star1.svg"
import feedback_star2 from "../../../../../../../public/icons/feedback_star2.svg"
import feedback_star3 from "../../../../../../../public/icons/feedback_star3.svg"

const Feedback = () => {
	const list = [1,2,3,4,5,6,7,8,9,10]
	const [rating, setRating] = useState<number>(0);
	const [showFeedback, setShowFeedback] = useState<boolean>(false);

	useEffect(() => {
		const handleShowFeedback = setTimeout(() => {
			setShowFeedback(true);
		}, 3000);

		return () => {
			clearTimeout(handleShowFeedback); 
		};
	}, []);

	return (
		<div className="min-h-screen pb-16 px-8 flex justify-center items-center">
			{!showFeedback && <div className="flex justify-center items-center gap-5 -mt-20 ">
				<Image
					src={feedback_star1}
					width={97.55}
					height={97.55}
					alt="star"
					className="mt-10 w-[57.42px] h-[57.42px] md:w-[97.55px] md:h-[97.55px]"
                />
                <Image
					src={feedback_star2}
					width={100}
					height={100}
					alt="star"
					className=" w-[58.86px] h-[58.86px] md:w-[100px] md:h-[100px]"
                />
                <Image
					src={feedback_star3}
					width={106.35}
					height={106.35}
					alt="star"
					className="mt-10 w-[62.60px] h-[62.60px] md:w-[106.35px] md:h-[106.35px]"
                />
			</div>}	
			{showFeedback && <div className="-mt-10">
				<h2 className="font-nunito font-bold text-white text-xl md:text-2xl lg:text-[40px] lg:leading-[52px] text-center px-8 md:px-16 lg:px-24">
				    On a scale of 1-10 how will you rate their performance to this week’s activities
				</h2>
				<div className="flex justify-center items-center mt-3">
					<div className=" w-fit flex flex-col px-3 py-3 mt-2 gap-4">
						<div className="flex items-center gap-2 md:gap-3">
							{
								list.map(item => (
									<button key={item} 
									    onClick={() => setRating(item)}
									    className={`
									    	font-nunito font-semibold text-xs md:text-sm lg:text-xl text-white 
									    	w-[26.61px] h-[30.74px] md:w-[44px] md:h-[56px] lg:w-[54px] lg:h-[62px]
									    	rounded-[6.41px] md:rounded-[13px] ${rating === item ? "bg-[#2D4675]" : "bg-[#112349]"}
									    	`}
									>{item}</button>
							))}
						</div>
						<div className="flex items-center justify-between">
							<p className="text-xs font-semibold text-white font-nunito lg:text-xl ">Bad</p>
							<p className="text-xs font-semibold text-white font-nunito lg:text-xl ">Fair</p>
							<p className="text-xs font-semibold text-white font-nunito lg:text-xl ">Good</p>
						</div>
					</div>
				</div>
			</div>}
		</div>
	)
}

export default Feedback