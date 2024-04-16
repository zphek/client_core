import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const response = NextResponse.next();
    const token = request.cookies.get("token");

    if(request.nextUrl.pathname != "/login" && !token){
        return NextResponse.redirect(new URL("/login", request.url));
    }
}