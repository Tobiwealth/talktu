'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import WeeklyAssessment from '@/components/kidsDashboard/WeeklyAssessment'
import FlashCards from '@/components/kidsDashboard/FlashCards'
import GoBackButton from '@/components/GoBackButton'


const WeekLesson = ({ params }: { params: { weekId: string } }) => {
	const {weekId} = params
	const router = useRouter();

	return (
		<div className="min-h-screen px-8 lg:px-20">
			<GoBackButton extraClass="mb-6"/>
			<div className="flex justify-between gap-8">
				<div className="rounded-[21px] bg-[#04122E] w-[435px] lg:flex flex-col items-center hidden  ">
					<div className="font-nunito flex justify-center items-start gap-2 py-4 bg-[#0A1835] border-[1px] border-[#0F2248] w-full rounded-t-[21px]">
						<h2 className="font-medium text-2xl text-white">Week 1:</h2>
						<div className="">
							<h2 className="font-medium text-2xl text-white">Forming basic sentences</h2>
							<p className="text-neutral-400 font-normal text-sm">
								<span className="pr-5">5 Units</span>
								<span>50 Skills</span>
							</p>
						</div>
					</div>
					<div className="overflow-y-scroll h-screen hide-scrollbar ">
						<WeeklyAssessment/>
					</div>
				</div>
				<div className="w-full lg:w-[calc(100%-480px)] overflow-y-scroll overflow-x-visible h-full h-screen hide-scrollbar">
					<FlashCards/>
				</div>
			</div>
		</div>
	)
}

export default WeekLesson