import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/events/all", request.url));
}

export const config = {
  // List of urls entered by the user which then we want to redirect to /events/all
  matcher: ["/events"],
};
