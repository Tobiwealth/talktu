'use client'
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from 'react';


const RequiredAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const { token } = useAuthStore((state) => state);  // Access token from Zustand store
    const router = useRouter();

    useLayoutEffect(() => {
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
