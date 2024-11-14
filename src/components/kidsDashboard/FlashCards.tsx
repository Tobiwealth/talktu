'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import flag from '../../../public/icons/flag.svg'
import cards from '../../../public/icons/cards.svg'
import video from '../../../public/icons/video.svg'

const FlashCards = () => {
	const router = useRouter();
	
	return (
		<div className="w-full">
			<div className="flex flex-col gap-2 w-full">
				<p className="text-[#6296F6] text-sm font-nunito font-medium">You’re here</p>
				<div className="w-full h-[14px] bg-[#2C4B8445] border-[2px] border-[#2C4B84] rounded-[43px]">
					<div className="bg-[#6296F6] h-full w-[15px] rounded-l-[43px]"></div>
				</div>
				<Image src={flag} width={31} height={31} quality={100} alt="flag" className="self-end translate-y-[-2.8rem]" />
			</div>
			<div className="bg-[#0A1835] p-6 rounded-[20px]">
				<h2 className="font-nunito font-semibold text-xl text-white mb-3">Flashcards</h2>
				<Image src={video} width={741} height={348} quality={100} alt="video" className="" />
			</div>
			<div className="p-2 bg-[#0A1835] mt-12 rounded-t-[16px]">
				<h2 className="font-nunito font-semibold text-xl text-white pl-5 pt-3">Flashcards</h2>
				<div className="flex justify-between items-center ">
					<Image onClick={() => router.push('/dashboard/02/03/04')} src={cards} width={327} height={336} quality={100} alt="cards" className="p-4 cursor-pointer" />
					<Image src={cards} width={327} height={336} quality={100} alt="cards" className="p-4" />
				</div>
			</div>
		</div>
	)
}

export default FlashCards