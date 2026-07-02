import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (request.method === "GET" || request.method === "HEAD") {
    console.info(
      JSON.stringify({
        event: "site_visit",
        method: request.method,
        path: pathname,
        search,
        referer: request.headers.get("referer"),
        userAgent: request.headers.get("user-agent"),
        country: request.headers.get("x-vercel-ip-country"),
      }),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
