'use client'
import React from 'react'
import Image from 'next/image'
import dashboard_image from '../../../public/icons/dashboard_image.svg'
import locked_module from '../../../public/icons/locked_module.svg'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
	const list = [1,2,3,4,5,6,7,8,9,10,11]
	const position = [
	                    '-translate-x-16 md:-translate-x-2 lg:-translate-x-6 lg:pt-10', '-translate-x-[85px] md:-translate-x-[180px] lg:-translate-x-[155px]', 'translate-x-20 md:-translate-x-[155px] lg:translate-x-40', 'translate-x-6 md:translate-x-32 lg:translate-x-36', '-translate-x-[100px] md:translate-x-[124px] lg:-translate-x-[120px]', '-translate-x-4 md:-translate-x-16 lg:-translate-x-14',
	                    'translate-x-[88px] md:-translate-x-48 lg:translate-x-44', 'translate-x-6 md:-translate-x-[55px] lg:translate-x-[138px]', '-translate-x-[88px] md:translate-x-[114px] lg:-translate-x-[74px]', '-translate-x-32 md:translate-x-32 lg:-translate-x-52', '-translate-x-8 lg:-translate-x-[95px]'
	                ]
	const wordPosition = [
	                    '-translate-x-28 md:-translate-x-10 lg:-translate-x-20', '-translate-x-[38px] md:-translate-x-48 lg:-translate-x-24', 'translate-x-20 md:-translate-x-12 lg:translate-x-52', '-translate-x-8 md:translate-x-40 lg:translate-x-20', '-translate-x-28 md:translate-x-16 lg:-translate-x-36', 'translate-x-4 md:-translate-x-40 lg:translate-x-6',
	                    'translate-x-[70px] md:-translate-x-36 lg:translate-x-52', '-translate-x-4 md:translate-x-16 lg:translate-x-24', '-translate-x-32 md:translate-x-40 lg:-translate-x-32', '-translate-x-32 md:translate-x-16 lg:-translate-x-48', 'md:-translate-x-28 lg:-translate-x-4'
	                ]
	const router = useRouter()
	return (
		<div className="bg-[url('/icons/mobile_background.svg')] md:bg-[url('/icons/background_vector.svg')] bg-no-repeat lg:bg-top lg:bg-scroll h-full min-h-screen flex flex-col items-center pb-12 px-8">
			<div className="pt-10 lg:pt-16">
				<h1 className="text-white font-nunito font-bold text-lg md:text-[2.5rem] text-center">Sammy’s personalised learning plan</h1>
				<h3 className="font-nunito font-medium text-neutral-400 text-base md:text-xl text-center md:pt-3">
				    Sammy’s learning plan is spread over a period of 12 months, each <br className="hidden md:block"/>months plan is broken down into different lessons
				</h3>
			</div>
			<div className="mt-12 lg:mt-20 mb-8 -ml-28 md:-ml-64 lg:-ml-24">
				<button 
				    onClick={() => router.push('/dashboard/02')} 
				    className="text-white font-nunito font-medium text-sm flex justify-center items-center gap-1 bg-retro_blue-main h-[2.25rem] w-[5.9rem] rounded-[9px] shadowbox3"
			    >Start here</button>
			</div>
			<div>
				<div className="hidden md:block md:border-[10px] md:border-[#243B67] flex justify-center items-center md:p-1 rounded-[100%] -ml-44 lg:ml-0">
					<Image
						src={dashboard_image}
						width={208.6}
						height={191.09}
						quality={100}
						alt="dashboard image"
						className="rounded-[100%] p-2"
				    />
				</div>
				<div className="md:hidden border-[5px] border-[#243B67] flex justify-center items-center lp-1 rounded-[100%] -ml-8 ">
					<Image
						src={dashboard_image}
						width={112.32}
						height={102.89}
						quality={100}
						alt="dashboard image"
						className="rounded-[100%] p-2"
				    />
				</div>	
			</div>
			<p className="font-nunito font-semibold text-base md:text-xl text-white pt-4 text-center lg:text-left lg:ml-24">Forming Basic <br className="md:hidden"/>Sentences</p>
			<div className="">
				{list.map((item, i) => <div key={item}>
					<div className={`mt-32 lg:mt-56 ${position[i]} `}>
						<div className="hidden md:block p-1 rounded-[100%]">
							<Image
								src={locked_module}
								width={228.6}
								height={227.09}
								quality={100}
								alt="dashboard image"
								className="rounded-[100%] p-2 "
						    />
					    </div>   
					    <div className="md:hidden">							
					        <Image
								src={locked_module}
								width={112.32}
								height={102.89}
								quality={100}
								alt="dashboard image"
								className="rounded-[100%] p-2 "
						    />
						</div> 
				    </div>
				    <p className={`font-nunito font-semibold text-xs md:text-xl text-white pt-4 ${wordPosition[i]}`}>Forming Basic Sentences</p>
				</div>)}
			</div>
		</div>
	)
}

export default Dashboard