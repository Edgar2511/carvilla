import {
  AUTH_ACTION_TYPES,
  SetAuthStatusPayload,
  SetCurrentUserPayload,
  User,
} from "./types";

export const setCurrentUserAction = (payload: SetCurrentUserPayload) => ({
  type: AUTH_ACTION_TYPES.SET_CURRENT_USER,
  payload,
});

export const setUsersDataAction = () => ({
  type: AUTH_ACTION_TYPES.SET_CURRENT_USERS_DATA,
});

export const setAuthStatusAction = (payload: SetAuthStatusPayload) => ({
  type: AUTH_ACTION_TYPES.SET_AUTH_STATUS,
  payload,
});

export const setAllUsersDataAction = (payload: User[]) => ({
  type: AUTH_ACTION_TYPES.SET_ALL_USERS_DATA,
  payload,
});
