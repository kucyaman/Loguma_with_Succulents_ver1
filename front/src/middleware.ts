import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log("Middleware called: ", request.nextUrl.pathname);

  const token = request.cookies.get('access-token');
  if (!token && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/home','/home/:path*','/log','/log/:path*'],
};
