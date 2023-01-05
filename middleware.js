import { NextResponse } from "next/server";

export default function middleware(req) {
  let isConnected = req.cookies.get("user");
  let url = req.url;

  if (
    (!isConnected && url.includes("/dashboard")) ||
    (!isConnected && url.includes("/businessInfo"))
  ) {
    return NextResponse.redirect("http://localhost:3000/signin");
  }
}
