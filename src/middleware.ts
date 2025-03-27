import { NextRequest, NextResponse } from 'next/server';


export function middleware(request: NextRequest) {
	const protectedRoutes = ['/onboarding', '/dashboard'];
	const token = request.cookies.get('token');
	const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );

	if (isProtectedRoute && !token) {
		const redirectRoute = `/auth/login?redirect=${encodeURIComponent(request.nextUrl.pathname)}`;
		return NextResponse.redirect(new URL(redirectRoute, request.nextUrl.origin));
	}

    return NextResponse.next();
}
 
