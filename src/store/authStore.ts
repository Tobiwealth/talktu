import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  name: string;
  email: string;
  userId: string;
  addAuth: (name:string, userId:string) => void;
  addEmail: (email:string) => void;
  clearAuth: () => void;
};

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      name: "",
      userId: "",
      email: "",
      addAuth: (name, userId) => {
        set({ name, userId });
      },
      clearAuth: () => {
        set({ name: "", userId: "", email: "" }); // Clear both name and userId
        useAuthStore.persist.clearStorage();
      },
      addEmail: (email) => {
        set({ email });
      },
    }),
    {
      name: "auth-storage", // Key for localStorage
    }
  )
);