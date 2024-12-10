import { create } from "zustand";

type AuthStore = {
  token: string;
  email: string;
  userId: string;
  addAuth: (token:string, userId:string) => void;
  addEmail: (email:string) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    token: '',
    userId: '',
    email: 'tobi@gmail.com',
	  addAuth: (token, userId) => {
        set({ token, userId }); // Directly update the token
    },
    clearAuth: () => {
        set({ token: '' }); // Clear the token
    },
    addEmail: (email) => {
        set({ email }); // Directly update the token
    },
}));