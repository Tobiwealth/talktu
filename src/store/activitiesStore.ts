import { create } from "zustand";
import { persist } from "zustand/middleware";


// type Activity = {
//   activityID: string;
//   resources: string[];
// };

// type ActivitiesType = {
//   dayOfWeek: number;
//   activities: Activity[];
//   theme: string;
// };

type Activity = {
  activityId: string;
  order: number;
  isRepeated: boolean;
  isCompleted: boolean;
};

type ActivitiesType = {
  dayOfWeek: number;
  date: string;
  activities: Activity[];
};


type ActivitiesState = {
  activities: ActivitiesType[];
  filteredActivity: ActivitiesType;
  setActivities: (data: ActivitiesType[]) => void;
  setFilteredActivity: (data: ActivitiesType) => void;
  clearActivities: () => void;
};

const initialActivity: ActivitiesType = {
  dayOfWeek: 0,  
  activities: [], 
  date: ""       
};


export const useActivitiesStore = create<ActivitiesState>()(
  persist(
    (set) => ({
      activities: [],
      filteredActivity: initialActivity,
      setActivities: (data) => set({ activities: data }),
      setFilteredActivity: (data) => set({ filteredActivity: data }),
      clearActivities: () => {
        set({ activities: [], filteredActivity: initialActivity });
        useActivitiesStore.persist.clearStorage();
      },
    }),
    {
      name: "kidsActivities-storage", // Key for localStorage
    }
  )
);
