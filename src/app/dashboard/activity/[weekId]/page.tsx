'use client'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import WeeklyAssessment from '@/components/kidsDashboard/WeeklyAssessment'
import FlashCards from '@/components/kidsDashboard/FlashCards'
import GoBackButton from '@/components/GoBackButton'

import {useActivitiesStore} from '@/store/activitiesStore'

type Activity = {
  activityId: string;
  order: number;
  isRepeated: boolean;
  isCompleted: boolean;
};
type ActivityDay = {
	dayOfWeek: number;
	activities: Activity[]; 
	date: string;
};

const WeekLesson = ({ params }: { params: { weekId: string } }) => {
	const {weekId} = params
	const router = useRouter();
	
	const activities = useActivitiesStore((state) => state.activities)
	const setFilteredActivity = useActivitiesStore((state) => state.setFilteredActivity)
	const filteredActivity = useActivitiesStore((state) => state.filteredActivity)
	//const [filteredActivities, setFilteredActivities] = useState<ActivityDay>();
	const [activityId, setActivityId] = useState<string>("");
	const list = [1,2,3,4]

	const getActivitiesForDay = (day: number): ActivityDay | undefined => {
        const activity = activities.find((act:ActivityDay) => act.dayOfWeek === day) || null;
        return activity ?? undefined;
    };

    useEffect(() => {
	    if (!weekId || isNaN(Number(weekId))) return;

	    const filtered = getActivitiesForDay(Number(weekId));
	    if (filtered) {
	        setFilteredActivity(filtered);
	    }
    }, [activities, weekId, setFilteredActivity]); 

    //console.log(filteredActivity)

    if(filteredActivity?.activities.length === 0){
    	return<div className="min-h-screen px-8 lg:px-20 relative justify-center items-center flex">
    	    <h2 className="font-nunito font-semibold text-white text-xl">Loading...</h2>
    	</div>
    }

	return (
		<div className="min-h-screen px-8 lg:px-20 relative">
			<GoBackButton extraClass="mb-2"/>
			<div className="flex flex-col justify-center gap-4 mx-auto w-fit pb-8">
				<div className="flex flex-col items-center justify-center">
				    {filteredActivity &&<FlashCards activities={filteredActivity.activities} day={weekId}/>}
				</div>
			</div>
			
		</div>
	)
}

export default WeekLesson