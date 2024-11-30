'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import flag from '../../../public/icons/flag.svg'
import cards from '../../../public/icons/cards.svg'
import video from '../../../public/icons/video.svg'
import Button from '@/components/Button'

const FlashCards = () => {
	const router = useRouter();
	
	return (
		<div className="w-full">
			<div className="flex flex-col w-full gap-2">
				<p className="text-[#6296F6] text-sm font-nunito font-medium">You’re here</p>
				<div className="w-full h-[14px] bg-[#2C4B8445] border-[2px] border-[#2C4B84] rounded-[43px]">
					<div className="bg-[#6296F6] h-full w-[15px] rounded-l-[43px]"></div>
				</div>
				<Image src={flag} width={31} height={31} quality={100} alt="flag" className="self-end translate-y-[-2.8rem]" />
			</div>
			<div className="bg-[#0A1835] p-6 rounded-[20px]">
				<h2 className="mb-3 text-xl font-semibold text-white font-nunito">Flashcards</h2>
				<Image src={video} width={741} height={348} quality={100} alt="video" className="" />
			</div>
			<div className="p-5 bg-[#0A1835] mt-12 rounded-[16px]">
				<h2 className="font-nunito font-semibold text-xl text-white pb-5">Flashcards</h2>
				<div className="flex flex-col lg:flex-row justify-between items-center gap-6 ">
				    <div className="p-4 bg-[#112349] rounded-[16px]">
					    <Image 
					        src={cards} 
					        width={327} 
					        height={336} 
					        quality={100} 
					        alt="cards" 
					        className="" 
					    />
					    <p className="font-nunito font-semibold text-xl text-white pt-2 pb-5">Common Objects</p>
					    <button 
					        onClick={() => router.push('/dashboard/activity/02/03/04')} 
					        className="font-nunito font-semibold text-sm text-deep_blue bg-neutral-200 rounded-[12px] h-[42.51px] w-full"
					    >Start</button>
					</div>
					<div className="p-4 bg-[#112349] rounded-[16px]">
					    <Image 
					        src={cards} 
					        width={327} 
					        height={336} 
					        quality={100} 
					        alt="cards" 
					        className="" 
					    />
					    <p className="font-nunito font-semibold text-xl text-white pt-2 pb-5">Common Objects</p>
					    <button className="font-nunito font-semibold text-sm text-deep_blue bg-neutral-200 rounded-[12px] h-[42.51px] w-full">Start</button>
					</div>
				</div>
			</div>
			<div className="p-5 bg-[#0A1835] mt-6 rounded-[16px]">
				<p className="font-nunito font-semibold text-white text-xl pb-4">Comment</p>
				<textarea name="Comment" id="Comment"
				    placeholder="Leave a comment or feedback about this lesson"
				    className="bg-[#11244842] border-[1px] border-[#112448] h-[215px] w-full py-3 px-5 rounded-[16px] 
				    placeholder:text-[#3E64AB] placeholder:font-light font-nunito placeholder:italic text-white focus:border-[3px] focus:outline-none"
				>	
				</textarea>
			</div>
			<div className="pt-6 pb-12 px-1">
				<Button title="Finish" buttonClass="w-full h-[48.68px] font-bold text-deep_blue text-base" onClick={() => console.log("")}/>
			</div>
		</div>
	)
}

export default FlashCards