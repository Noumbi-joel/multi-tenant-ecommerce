import { NextResponse } from "next/server";

export default function middleware(req) {
  let connected = req.cookies.get("user");
  let url = req.url;

  if (
    (!connected && url.includes("/dashboard")) ||
    (!connected && url.includes("/businessInfo"))
  ) {
    return NextResponse.redirect("http://localhost:3000/signin");
  }
}
