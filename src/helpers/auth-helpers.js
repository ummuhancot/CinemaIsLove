import { auth } from "../../auth";
import { appConfig } from "../helpers/config";

export const getAuthHeader = async () => {
  const session = await auth();
  const token = session?.authToken;

  let authHeader = {
    "Content-Type": "application/json",
  };

  if (token) {
    authHeader = {
      ...authHeader,
      Authorization: `Bearer ${token}`,
    };
  }

  return authHeader;
};

const parseJWT = (token) => {

  return JSON.parse(atob(token.split(".")[1]));
};

export const getIsTokenValid = (token) => {
  if (!token) return false;

  const jwtExpireTimeStamp = parseJWT(token).exp;
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);

  return jwtExpireTimeStamp >= currentTimestamp;
};

export const getIsUserAuthorized = (role, path) => {
  const userRight = appConfig.userRightsOnRoutes.find((item) =>
    item.urlRegex.test(path)
  );

  if (!userRight) return false;
  return userRight.roles.includes(role);
};
