'use client'
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';


const RequiredAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const token = useAuthStore((state) => state.token);  // Access token from Zustand store
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        router.push('/auth/login');  // Redirect to login page if not authenticated
      }
    }, [token, router]);

    if (!token) {
      return <div>Loading...</div>;  // Optional: Show a loading state while checking token
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};


export default RequiredAuth;
