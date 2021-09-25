import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_ALL_CHEF,
  GET_CHEF,
  GET_ALL_CLIENT,
  IS_EDIT_PROFILE,
} from "../constants/user";

const initialState = {
  user: null,
  isAuth: false,
  loadUser: false,
  errors: null,
  profile: null,
  clients: [],
  isEditProfile: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        user: payload.user,
        isAuth: true,
        errors: [],
      };
    case CURRENT_USER:
      return {
        ...state,
        loadUser: false,
        user: payload,
        isAuth: true,
        errors: [],
      };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        loadUser: false,
        errors: [],
        user: {},
        isAuth: false,
        chefs: [],
        clients: [],
      };
    case GET_ALL_CHEF:
      return {
        ...state,
        loadUser: false,
        chefs: payload.chefs,
      };
    case GET_CHEF:
      return {
        ...state,
        loadUser: false,
        profile: payload,
      };
    case GET_ALL_CLIENT:
      return { ...state, loadUser: false, errors: false, clients: payload };
    case IS_EDIT_PROFILE:
      return { ...state, isEditProfile: payload };
    case "VIDE_ERRORS":
      return { ...state, errors: null };
    default:
      return state;
  }
};
export default userReducer;
