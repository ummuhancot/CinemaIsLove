import { NextResponse } from "next/server";
import { auth } from "./auth";
import { getIsUserAuthorized } from "@/helpers/auth-helpers";

export async function middleware(req) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role = session.role;
  const path = req.nextUrl.pathname;

  const isAuthorized = getIsUserAuthorized(role, path);

  if (!isAuthorized) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}
