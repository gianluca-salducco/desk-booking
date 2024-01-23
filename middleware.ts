import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const currentToken = request.cookies.get("token")?.value;

  if (currentToken && path === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  } else if(!currentToken && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
