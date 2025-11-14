import { CITIES_CREATE_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helpers";

export const createCities = async (payload) => {
  return fetch(`${CITIES_CREATE_API}`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload),
  });
};