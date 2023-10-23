import {
  AUTH_ACTION_TYPES,
  AuthState,
  AuthAction,
  SetCurrentUserPayload,
  SetAuthStatusPayload,
  User,
} from "./types";

// const storedIsAuth = localStorage.getItem("isAuth") === "true";
// const storedUsername = localStorage.getItem("username") || "";

export const initialState: AuthState = {
  user: {
    username: "",
    password: "",
  },
  usersData: [],
  isAuth: false,
};

export const AuthReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_CURRENT_USER:
      const { name, value } = action.payload as SetCurrentUserPayload;
      return { ...state, user: { ...state.user, [name]: value } };

    case AUTH_ACTION_TYPES.SET_CURRENT_USERS_DATA:
      const newState = {
        ...state,
        usersData: [...state.usersData, state.user],
      };
      localStorage.setItem("usersData", JSON.stringify(newState.usersData));
      return newState;

    case AUTH_ACTION_TYPES.SET_AUTH_STATUS:
      // return { ...state, isAuth: true };
      const { isAuth } = action.payload as SetAuthStatusPayload;
      return { ...state, isAuth };

    case AUTH_ACTION_TYPES.SET_ALL_USERS_DATA:
      return { ...state, usersData: action.payload as User[] };
    default:
      return state;
  }
};
