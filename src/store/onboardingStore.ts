import { create } from "zustand";

type Onboarding = {
  accountCreated: boolean;
  childProfileCreated: boolean;
  assessmentTaken: boolean;
  subscribed: boolean;
};

type OnboardingStore = {
  onboardingAccess: Onboarding;
  setOnboardingAccess: (onboardingAccess:Onboarding) => void;
};

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  onboardingAccess: {
    accountCreated: true,
    childProfileCreated: false,
    assessmentTaken: false,
    subscribed: false,
  },
  setOnboardingAccess: (onboardingAccess: Onboarding) => {
    set({ onboardingAccess });
  },
}));