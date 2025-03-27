'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import flag from '../../../public/icons/flag.svg'
import cards from '../../../public/icons/cards.svg'
import Button from '@/components/Button'
import ActivityModal from '@/components/kidsDashboard/ActivityModal'
import { getCookie } from 'cookies-next';
import axios from '@/api/useAxios'


type Activity = {
  activityId: string;
  order: number;
  isRepeated: boolean;
  isCompleted: boolean;
};

type FlashCardsProps = {
	activities: Activity[];
	day:string;
}

const FlashCards: React.FC<FlashCardsProps> = ({activities, day}) => {
	const token = getCookie('token');
	const router = useRouter();
	const [openModal, setOpenModal] = useState(false);
	const [clickedId, setClickedId] = useState<string | null>(null);
	const [activityIndex, setActivityIndex] = useState<number>(0)
	const [activityDetails, setActivityDetails] = useState({
		description: '',
		instruction: ''
	})
	const images = [
	    "/images/flashcard_cover1.svg", "/images/flashcard_cover2.svg",
	    "/images/flashcard_cover3.svg", "/images/flashcard_cover4.svg"
	]
	const handleClick = async(id:string, index:number) => {
		if (!token ) return;
		try{
            const response = await axios.get(`/activities/${id}`,
                {
                    headers: { 
                    	'Authorization':`Bearer ${token}`
                    }
                }
            );
            //console.log(response.data)
            await setActivityDetails({
            	description: response?.data?.description,
            	instruction: response?.data?.instruction
            })
            setOpenModal(true);
            setClickedId(id)
            setActivityIndex(index)
		}catch(err){
			console.error(err);
		}
	}
	const handleRouting = () => {
		setOpenModal(false);
		router.push(`/dashboard/activity/${day}/${clickedId}`)
	}

	return (
		<div className="w-full">
			<div className="flex flex-col w-full gap-2">
				<p className="text-[#6296F6] text-sm font-nunito font-medium">You’re here</p>
				<div className="w-full h-[14px] bg-[#2C4B8445] border-[2px] border-[#2C4B84] rounded-[43px]">
					<div className="bg-[#6296F6] h-full w-[15px] rounded-l-[43px]"></div>
				</div>
				<Image src={flag} width={31} height={31} quality={100} alt="flag" className="self-end translate-y-[-2.8rem]" />
			</div>
			<h2 className="font-nunito font-semibold text-xl text-white text-left ">Day {day}</h2>
			<div className="p-5 bg-[#0A1835] mt-2 rounded-[16px]">
				<h2 className="font-nunito font-semibold text-xl text-white pb-5">Activities</h2>
				<div className="flex flex-col lg:grid grid-cols-2 justify-between items-center gap-6 ">
				    {activities.map((item,i) => (<div key={item?.activityId} className="p-4 bg-[#112349] rounded-[16px]">
					    <Image 
					        src={i+1 > images.length ? images[0]: images[i]} 
					        width={310} 
					        height={177} 
					        quality={100} 
					        alt="cards" 
					        className="" 
					    />
					    <p className="font-nunito font-semibold text-xl text-white pt-2 pb-5">Activity {i+1}</p>
					    <button 
					        onClick={() => handleClick(item.activityId, i+1)} 
					        className="font-nunito font-semibold text-sm text-deep_blue bg-neutral-200 rounded-[12px] h-[42.51px] w-full"
					    >Start</button>
					</div>))}
				</div>
			</div>
			{openModal && <ActivityModal handleClick={handleRouting} activityDetails={activityDetails} activityNumber={activityIndex}/>}
		</div>
	)
}

export default FlashCards