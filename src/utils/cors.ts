import { NextRequest, NextResponse } from "next/server";

// lib/cors.ts (or utils/cors.ts)
export const cors = (req: NextRequest, res: NextResponse) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://naym-hossen.vercel.app",
  ];
  const origin = req.headers.get("origin");

  if (allowedOrigins.includes(origin || "")) {
    res.headers.set("Access-Control-Allow-Origin", origin || "*");
    res.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.headers.set("Access-Control-Allow-Credentials", "true");
  }

  // Handle preflight (OPTIONS) requests
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: res.headers });
  }

  return res;
};
