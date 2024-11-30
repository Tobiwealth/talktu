import { NextResponse, NextRequest } from 'next/server'
import {useAuthStore} from '@/store/authStore'


export async function middleware(request: NextRequest) {
	const token = await request.cookies.get('sessionToken');
	// const token = useAuthStore((state:string) => state?.token);
	if(!token){
		return NextResponse.redirect(new URL('/auth/login', request.url))
	}
}
 
export const config = {
  matcher: ['/dashboard/:path*'],
}