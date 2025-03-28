'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import dashboard_image from '../../../public/icons/dashboard_image.svg'
import locked_module from '../../../public/icons/locked_module.svg'
import { useRouter } from 'next/navigation'
import StarComponent from '@/components/StarComponent'
import {useChildStore} from '@/store/childStore'
import {useActivitiesStore} from '@/store/activitiesStore'
import axios from '@/api/useAxios'
import { getCookie } from 'cookies-next';


type Activity = {
  activityId: string;
  order: number;
  isRepeated: boolean;
  isCompleted: boolean;
};

type Day = {
  dayOfWeek: number;
  date: string;
  activities: Activity[];
};

type Week = {
  weekNumber: number;
  startDate: string;
  endDate: string;
  days: Day[];
};

type ActivitiesType = Week[];


const Dashboard = () => {
	const [name, setName] = useState<string>("")
	//const activities = useActivitiesStore((state) => state.activities)
	const addActivities = useActivitiesStore((state) => state.setActivities)
	const [activities, setActivities] = useState<ActivitiesType>([]); 
	const token = getCookie('token');
	const childId = useChildStore((state) => state.childProfile?.childId)
	const addChild = useChildStore((state) => state.addChild)
	const [error, setError] = useState<string>("")
	const [imageUrl, setImageUrl] = useState<string>("")
	const list = [1,2,3,4,5,6]
	const images = [
	    "/images/rounded_lion.svg", "/images/dash_image.svg", "/images/dash_image2.svg",
	    "/images/dash_image3.svg", "/images/dash_image4.svg","/images/dash_image5.svg"
	]
	const position = [
	                    '-translate-x-12 sl:-translate-x-16 md:-translate-x-0 lg:-translate-x-3 lg:pt-10', '-translate-x-[85px] sl:-translate-x-[102px] md:-translate-x-[170px] lg:-translate-x-[155px]', 'translate-x-[90px] sl:translate-x-[76px] md:-translate-x-[210px] lg:translate-x-[100px]', 'translate-x-10 sl:translate-x-6 md:translate-x-10 lg:translate-x-44', 
	                    '-translate-x-[95px] sl:-translate-x-[108px] md:translate-x-[130px] lg:-translate-x-[60px]', '-translate-x-16 sl:-translate-x-20 md:-translate-x-4 lg:-translate-x-32',
	                    'translate-x-[108px] sl:translate-x-[88px] md:-translate-x-48 lg:translate-x-44', 'translate-x-12 sl:translate-x-6 md:-translate-x-[55px] lg:translate-x-[138px]', 
	                    '-translate-x-[68px] sl:-translate-x-[88px] md:translate-x-[114px] lg:-translate-x-[74px]', '-translate-x-28 sl:-translate-x-32 md:translate-x-32 lg:-translate-x-52', 'translate-x-2 sl:-translate-x-8 lg:-translate-x-[95px]'
	                ]
	const wordPosition = [
	                    '-translate-x-[70px] sl:-translate-x-24 md:-translate-x-10 lg:-translate-x-12', '-translate-x-[65px] sl:-translate-x-[88px] md:-translate-x-44 lg:-translate-x-24', 'translate-x-24 sl:translate-x-20 md:-translate-x-32 lg:translate-x-44', 'translate-x-10 sl:translate-x-4 md:translate-x-32 lg:translate-x-36', 
	                    '-translate-x-[88px] sl:-translate-x-28 md:translate-x-32 lg:-translate-x-24', '-translate-x-8 sl:-translate-x-12 md:-translate-x-20 lg:-translate-x-12',
	                    'translate-x-[93px] sl:translate-x-[70px] md:-translate-x-36 lg:translate-x-52', '-translate-x-0 sl:-translate-x-4 md:translate-x-16 lg:translate-x-24', 
	                    '-translate-x-[106px] sl:-translate-x-32 md:translate-x-40 lg:-translate-x-32', '-translate-x-[100px] sl:-translate-x-32 md:translate-x-16 lg:-translate-x-48', 'translate-x-5 sl:translate-x-0 md:-translate-x-28 lg:-translate-x-4'
	                ]
	const router = useRouter()

	useEffect(() => {
		const fetchActivities = async() => {
			if (!token || !childId || !activities) return;
			try{
				//fetch child's name first
				const res = await axios.get(`/children/${childId}`,
	                {
	                    headers: { 
	                    	'Content-Type': 'application/json',
	                    	'Authorization':`Bearer ${token}`
	                    }
	                }
	            );
	            setName(res.data.nickname);
	            addChild({
	            	fullName: res?.data.fullName,
					nickname: res?.data?.nickname,
					childId: res?.data?._id,
					childrenId: res?.data?.parent?.children,
					parentId: res?.data?.parent?._id,
                })

				// if (activities.length > 0) {
				//     console.log("Using cached activities from Zustand");
				//     return; 
				// }
				// console.log("tryyyyy")
				// console.log(childId, activities)
	            const response = await axios.get(`/learning-tracks?childId=${childId}`,
	                {
	                    headers: { 
	                    	'Authorization':`Bearer ${token}`
	                    }
	                }
	            );
	            //console.log("response",response.data.data[0].weeks)
	            addActivities(response.data.data[0].weeks[0].days)
	            setActivities(response.data.data[0].weeks)
	            setError("")
			}catch(err){
				console.error(err);
				setError('unable to generate activities, try again!')
			}
		}
		fetchActivities()
	}, [token, childId])
	//console.log("child id", childId)
	// console.log("activities", activities)
	//console.log(token)


	return (
		<div className="bg-[url('/icons/mobile_background.svg')] md:bg-[url('/icons/background_vector.svg')] bg-no-repeat lg:bg-top lg:bg-scroll h-full min-h-screen flex flex-col items-center pb-12 px-8 relative">
		    {
		    	(!activities[0]?.days || activities[0]?.days.length === 0) && <div className=" bg-[#020A1A94] absolute inset-0 z-50">
		    	    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2 ">
		    	       { !error &&
		    	       	<div className="flex flex-col justify-center items-center gap-2">
		    	       		<div className="w-[100px] h-[100px] rounded-[100%] border-8 border-t-retro_blue-main animate-spin"></div>
			    		    <p className="font-semibold font-nunito text-white text-xl">Generating your activities</p>
		    	       	</div>
		    	       }
			    	   {error && <p className="font-nunito text-white text-lg">{error}</p>}
		    		</div>
		    	</div>
		    }
			<div className="pt-10 lg:pt-16">
				<h1 className="text-white font-nunito font-bold text-lg md:text-[2.5rem] text-center">{`${name ?? ""}’s personalised learning plan`}</h1>
				<h3 className="text-base font-medium text-center font-nunito text-neutral-400 md:text-xl md:pt-3">
				    {`${name ?? ""}’s learning plan is spread over a period of 12 months, each`} <br className="hidden md:block"/>months plan is broken down into different lessons
				</h3>
			</div>
			<div className="mt-12 lg:mt-20 mb-8 -ml-16 sl:-ml-28 md:-ml-64 lg:-ml-24">
				<button 
				    onClick={() => router.push(`/dashboard/activity/${activities[0]?.days[0]?.dayOfWeek}`)} 
				    className="text-white font-nunito font-medium text-sm flex justify-center items-center gap-1 bg-retro_blue-main h-[2.25rem] w-[5.9rem] rounded-[9px] shadowbox3"
			    >Start here</button>
			</div>
			<div>
				<div 
				    onClick={() => router.push(`/dashboard/activity/${activities[0]?.days[0]?.dayOfWeek}`)}
				    className="hidden md:block md:border-[10px] md:border-[#243B67] flex justify-center items-center md:p-1 rounded-[100%] -ml-44 lg:ml-0 cursor-pointer"
				>
					<Image
						src={images[0]}
						width={184.72}
						height={184.72}
						quality={100}
						alt="dashboard image"
						className=""
				    />
				</div>
				<div 
				    onClick={() => router.push(`/dashboard/activity/${activities[0]?.days[0]?.dayOfWeek}`)}
				    className="md:hidden border-[5px] border-[#243B67] flex justify-center items-center p-1 rounded-[100%] ml-4 sl:-ml-6 cursor-pointer"
				>
					<Image
						src={images[0]}
						width={98.84}
						height={98.84}
						quality={100}
						alt="dashboard image"
						className=""
				    />
				</div>	
			</div>
			<p className="font-nunito font-semibold text-base md:text-xl text-white pt-4 text-center lg:text-left ml-12 sl:ml-0 lg:ml-24">Day 1</p>
			<div className="">
				{activities[0]?.days.map((item, i) =>{ if(i > 0) return <div key={i}>
					<div className={`mt-32 lg:mt-56 ${position[i-1]} `}>
						<div 
						    onClick={() => router.push(`/dashboard/activity/${item.dayOfWeek}`)}
						    className="hidden md:block p-1 rounded-[100%] md:border-[10px] md:border-[#243B67] cursor-pointer"
						>
							<Image
								src={images[i]}
								width={184.72}
								height={184.72}
								quality={100}
								alt="dashboard image"
								className={i > 2 ? "scale-125" : ""}
						    />
					    </div>   
					    <div 
					        onClick={() => router.push(`/dashboard/activity/${item.dayOfWeek}`)}
					        className="md:hidden p-1 rounded-[100%] border-[5px] border-[#243B67] cursor-pointer"
					    >							
					        <Image
								src={images[i]}
								width={98.84}
								height={98.84}
								quality={100}
								alt="dashboard image"
								className={i > 2 ? "scale-125" : ""}
						    />
						</div> 
				    </div>
				    <p className={`font-nunito font-semibold text-xs md:text-xl text-white pt-4 text-center ${wordPosition[i-1]}`}>Day {i+1}</p>
				</div>})}
			</div>
			<StarComponent/>
		</div>
	)
}

export default Dashboard;
