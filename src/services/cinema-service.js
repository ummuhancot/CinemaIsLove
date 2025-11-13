import { CINEMA_CREATE_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helpers";

export const createCinema = async (payload) => {
  return fetch(`${CINEMA_CREATE_API}`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload),
  });
};