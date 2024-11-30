import { create } from "zustand";

type AuthStore = {
  token: string;
  email: string;
  addAuth: (token:string) => void;
  addEmail: (token:string) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    token: '',
    email: 'tobi@gmail.com',
	addAuth: (token) => {
        set({ token }); // Directly update the token
    },
    clearAuth: () => {
        set({ token: '' }); // Clear the token
    },
    addEmail: (email) => {
        set({ email }); // Directly update the token
    },
}));