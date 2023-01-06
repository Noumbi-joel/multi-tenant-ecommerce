import { NextResponse } from "next/server";

export default function middleware(req) {
  let connected = req.cookies.get("user");
  let noBusiness = req.cookies.get("noBusiness");
  let url = req.url;

  if (
    (!connected && url.includes("/dashboard")) ||
    (!connected && url.includes("/businessInfo"))
  ) {
    return NextResponse.redirect("http://localhost:3000/signin");
  }
}
