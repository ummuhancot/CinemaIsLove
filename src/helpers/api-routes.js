import { appConfig } from "../helpers/config";

export const LOGIN_API = `${appConfig.apiURL}/api/login`;

export const REGISTER_API = `${appConfig.apiURL}/api/register`;


export const FORGOT_PASSWORD_API = `${appConfig.apiURL}/api/forgot-password`;

export const ADMIN_GET_ALL_BY_PAGE_API = `${appConfig.apiURL}/api/users/admins/page`;
export const ADMIN_DELETE_API = `${appConfig.apiURL}/api/users`;
export const AUTH_BY_ROLE_API = `${appConfig.apiURL}/api/users/auth`;
export const GET_USER_BY_ID_API = `${appConfig.apiURL}/api/users`;
export const GET_ALL_ADMIN_MANAGER_API = `${appConfig.apiURL}/api/users/getAllAdminManager`;

export const GET_ALL_USERS_WITH_QUERY_API = `${appConfig.apiURL}/api/users/admin`;
