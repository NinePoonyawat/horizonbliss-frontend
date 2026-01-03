import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("🔥 middleware hit:", req.nextUrl.pathname);

  if (!token && req.nextUrl.pathname.startsWith("/kitchen")) {
    return NextResponse.redirect(new URL("/enter", req.url));
  }
}

export const config = {
  matcher: ["/kitchen/:path*"],
};
