import { create } from "zustand";
import { persist } from "zustand/middleware";

type ChildProfile = {
  fullName?: string;
  nickname?: string;
  childrenId?: string[];
  childId: string;
  parentId?: string;
};

type ChildStore = {
  childProfile: ChildProfile | null;
  addChild: (childProfile: ChildProfile) => void;
  clearChild: () => void;
};

export const useChildStore = create(
  persist<ChildStore>(
    (set) => ({
      childProfile: null,
      addChild: (childProfile) => set({ childProfile }),
      clearChild: () => {
        set({ childProfile: null });
        useChildStore.persist.clearStorage();
      }, 
    }),
    {
      name: "child-storage", // Key for localStorage
    }
  )
);
