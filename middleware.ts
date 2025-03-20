import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// Secure /dashboard and API routes
export default withAuth(
  function middleware(req: NextRequest) {
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login",
    },
  }
);

// Apply only to secure routes
export const config = {
  matcher: ["/api/:path*", "/dashboard", "/dashboard/:path*"],
};
