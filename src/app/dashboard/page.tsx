'use client'
import React from 'react'
import Image from 'next/image'
import dashboard_image from '../../../public/icons/dashboard_image.svg'
import locked_module from '../../../public/icons/locked_module.svg'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
	const list = [1,2,3,4,5,6,7,8,9,10,11]
	const position = [
	                    '-translate-x-6 pt-10', '-translate-x-[155px]', 'translate-x-40', 'translate-x-36', '-translate-x-[120px]', '-translate-x-14',
	                    'translate-x-44', 'translate-x-[138px]', '-translate-x-[74px]', '-translate-x-52', '-translate-x-[95px]'
	                ]
	const wordPosition = [
	                    '-translate-x-20', '-translate-x-24', 'translate-x-52', 'translate-x-20', '-translate-x-36', 'translate-x-6',
	                    'translate-x-52', 'translate-x-24', '-translate-x-32', '-translate-x-48', '-translate-x-4'
	                ]
	const router = useRouter()
	return (
		<div className="bg-[url('/icons/mobile_background.svg')] lg:bg-[url('/icons/background_vector.svg')] bg-no-repeat lg:bg-top lg:bg-scroll h-full min-h-screen flex flex-col items-center pb-12 px-8">
			<div className="pt-16">
				<h1 className="text-white font-nunito font-bold text-lg md:text-[2.5rem] text-center">Sammy’s personalised learning plan</h1>
				<h3 className="font-nunito font-medium text-neutral-400 text-base md:text-xl text-center md:pt-3">
				    Sammy’s learning plan is spread over a period of 12 months, each <br className="hidden md:block"/>months plan is broken down into different lessons
				</h3>
			</div>
			<div className="mt-20 mb-8 -ml-24">
				<button 
				    onClick={() => router.push('/dashboard/02')} 
				    className="text-white font-nunito font-medium text-sm flex justify-center items-center gap-1 bg-retro_blue-main h-[2.25rem] w-[5.9rem] rounded-[9px] shadowbox3"
			    >Start here</button>
			</div>
			<div>
				<div className="border-[10px] border-[#243B67] p-1 rounded-[100%]">
					<Image
						src={dashboard_image}
						width={208.6}
						height={191.09}
						quality={100}
						alt="dashboard image"
						className="rounded-[100%] p-2"
				    />
				</div>
				
			</div>
			<p className="font-nunito font-semibold text-xl text-white pt-4 ml-24">Forming Basic Sentences</p>
			<div className="">
				{list.map((item, i) => <div key={item}>
					<div className={`mt-56 ${position[i]} `}>
						<div className=" p-1 rounded-[100%]">
							<Image
								src={locked_module}
								width={228.6}
								height={227.09}
								quality={100}
								alt="dashboard image"
								className="rounded-[100%] p-2 "
						    />
					    </div>    
				    </div>
				    <p className={`font-nunito font-semibold text-xl text-white pt-4 ${wordPosition[i]}`}>Forming Basic Sentences</p>
				</div>)}
			</div>
		</div>
	)
}

export default Dashboard