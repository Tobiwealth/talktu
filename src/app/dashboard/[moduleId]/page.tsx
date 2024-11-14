'use client'
import React from 'react'
import Image from 'next/image'
import dashboard_image from '../../../../public/icons/dashboard_image.svg'
import Lock from '../../../../public/icons/Lock.svg'
import { useRouter } from 'next/navigation';
import GoBackButton from '@/components/GoBackButton'

const Module = ({ params }: { params: { moduleId: string } }) => {
	const {moduleId} = params
	const router = useRouter();

	return (
		<div className="min-h-screen z-50 pb-24 ">
			<GoBackButton extraClass="ml-8 md:ml-16"/>
			<div className="flex flex-col items-center gap-8">
				<div className='font-nunito text-center'>
					<h1 className="text-white font-bold text-lg md:text-[2.5rem]">Module 1</h1>
					<p className="text-neutral-400 font-medium text-base md:text-2xl">Forming Basic Sentences</p>
				</div>
				<div className="lg:bg-[#172C54]  grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-[21px]">
					<div onClick={() => router.push('/dashboard/02/03')} className="cursor-pointer border-[2px] border-[#518AF5] rounded-[24px] p-4 pb-6">
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
				        <h3 className="font-nunito font-semibold text-white text-lg mt-2">Week 1</h3>
				        <p className="font-nunito font-normal text-neutral-400 text-base">Forming simple sentences</p>
					</div>
					<div className=" rounded-[24px] p-4 pb-6 relative">
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
				        <h3 className="font-nunito font-semibold text-white text-lg mt-2">Week 2</h3>
				        <p className="font-nunito font-normal text-neutral-400 text-base">Forming simple sentences</p>
				        <div className="bg-[#0B1529BD] rounded-[24px] absolute w-full h-full inset-0 flex items-center justify-center">
				        	<Image src={Lock} width={34.17} height={36.9} quality={100} alt="lock" className="" />
				        </div>
					</div>
					<div className=" rounded-[24px] p-4 pb-6 relative">
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
				        <h3 className="font-nunito font-semibold text-white text-lg mt-2">Week 2</h3>
				        <p className="font-nunito font-normal text-neutral-400 text-base">Forming simple sentences</p>
				        <div className="bg-[#0B1529BD] rounded-[24px] absolute w-full h-full inset-0 flex items-center justify-center">
				        	<Image src={Lock} width={34.17} height={36.9} quality={100} alt="lock" className="" />
				        </div>
					</div>
					<div className=" rounded-[24px] p-4 pb-6 relative">
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
				        <h3 className="font-nunito font-semibold text-white text-lg mt-2">Week 2</h3>
				        <p className="font-nunito font-normal text-neutral-400 text-base">Forming simple sentences</p>
				        <div className="bg-[#0B1529BD] rounded-[24px] absolute w-full h-full inset-0 flex items-center justify-center">
				        	<Image src={Lock} width={34.17} height={36.9} quality={100} alt="lock" className="" />
				        </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Module