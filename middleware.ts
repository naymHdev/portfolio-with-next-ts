import { NextRequest, NextResponse } from "next/server";

// Allowed Origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://naym-hossen.vercel.app",
];

// CORS Options for Headers
const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true", // Allow credentials if needed
};

export function middleware(request: NextRequest) {
  // Get the origin of the request
  const origin = request.headers.get("origin") ?? "";

  // Check if the origin is allowed
  const isAllowedOrigin = allowedOrigins.includes(origin);

  // Handle preflight requests (OPTIONS)
  if (request.method === "OPTIONS") {
    const preflightHeaders = {
      ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
      ...corsOptions,
    };

    // Respond to preflight with CORS headers
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // Handle other requests (GET, POST, etc.)
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

// Apply middleware to specific routes (e.g., dashboard and API routes)
export const config = {
  matcher: "/api/:path*",
};
