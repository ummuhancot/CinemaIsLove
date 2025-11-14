import { HALL_CREATE_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helpers";

export const createHall = async (payload) => {
  return fetch(`${HALL_CREATE_API}`, {
    method: "POST",
    headers: await getAuthHeader(),
    body: JSON.stringify(payload),
  });
};
