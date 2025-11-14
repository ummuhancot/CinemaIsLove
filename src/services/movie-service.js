// src/services/movieService.js
import { MOVİE_CREATE_API } from "@/helpers/api-routes";

export const createMovies = async (payload) => {
  const res = await fetch(MOVİE_CREATE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    // no JSON body
  }

  return { ok: res.ok, status: res.status, data };
};
