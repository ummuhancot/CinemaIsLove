"use server";

import { LOGIN_API } from "@/helpers/api-routes";
import { cookies } from "next/headers";

export const login = async (payload) => {
  const res = await fetch(LOGIN_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (data.authToken) {
    // JWT payload decode
    const base64Url = data.authToken.split(".")[1];
    const payloadJson = JSON.parse(Buffer.from(base64Url, "base64").toString());
    const role = payloadJson.roles[0]?.authority?.toLowerCase() || "customer";

    // Cookie set et
    cookies().set("role", role, { path: "/", httpOnly: true });
    cookies().set("authToken", data.authToken, { path: "/", httpOnly: true });
  }

  return data;
};
