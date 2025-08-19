import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/cocheras/todas", request.url));
}

export const config = {
  // List of urls entered by the user which then we want to redirect to /cocheras/todas
  matcher: ["/cocheras"],
};
