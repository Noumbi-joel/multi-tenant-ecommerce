import { NextResponse } from "next/server";
import { server } from "./config";

/**
 * @param req
 */
export default function middleware(req) {
  let connected = req.cookies.get("user");
  let url = req.url;
  let bTenant = req.cookies.get("bTenant");
  // if (
  //   (!connected && url.includes("/dashboard")) ||
  //   (!connected && url.includes("/businessInfo"))
  // ) {
  //   return NextResponse.redirect(`${server}/signin`);
  // }

  // if (
  //   connected &&
  //   !req.cookies.get("noBusiness") &&
  //   url.includes("/businessInfo")
  // ) {
  //   return NextResponse.redirect(`${server}/signin`);
  // }

  // if (
  //   connected &&
  //   !req.cookies.get("noBusiness") &&
  //   url.includes("/dashboard")
  // ) {
  //   return NextResponse.redirect(`${server}/signin`);
  // }

  // if (
  //   connected &&
  //   req.cookies.get("noBusiness")?.value === "true" &&
  //   url.includes("/dashboard")
  // ) {
  //   return NextResponse.redirect(`${server}/businessInfo`);
  // }

  // if (
  //   connected &&
  //   req.cookies.get("noBusiness")?.value === "false" &&
  //   url.includes("/businessInfo")
  // ) {
  //   return NextResponse.redirect(bTenant.value + "." + server);
  // }

  /**
   *
   * MULTI TENANCY LOGIC
   *
   */

  const { pathname } = req.nextUrl;
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get("host");

  if (hostname === "localhost:3000") {
    return;
  }

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)
  const currentHost =
    process.env.NODE_ENV == "production"
      ? hostname?.replace(`.vercel.app`, "") // PUT YOUR DOMAIN HERE
      : hostname?.replace(`.localhost:3000`, "");

  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents. This can also be done
  // via rewrites to a custom 404 page
  if (pathname.startsWith(`/_sites`)) {
    console.log("/_sites blocked");
    return new Response(null, { status: 404 });
  }

  if (
    !pathname.includes(".") && // exclude all files in the public folder
    !pathname.startsWith("/api") // exclude all API routes
  ) {
    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx

    const url = req.nextUrl.clone();
    url.pathname = `/_sites/${currentHost}${pathname}`;
    return NextResponse.rewrite(url);
  }
}
