import axios from '@/api/useAxios'

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

export const fetchActivities = async (childId: string, token: string): Promise<ActivitiesType> => {
    const response = await axios.get(`/learning-tracks?childId=${childId}`, {
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data.data[0]?.weeks || []; // Ensure weeks exists
};