import { create } from "zustand";

type ChildProfile = {
  fullName: string;
  nickname: string;
  childrenId: string[];
  childId: string;
  parentId: string;
};

type ChildStore = {
  childProfile: ChildProfile | null;
  addChild: (childProfile:ChildProfile) => void;
};

export const useChildStore = create<ChildStore>((set) => ({
  childProfile: null,
	addChild: (childProfile: ChildProfile) => {
        set({ childProfile });
    },
}));