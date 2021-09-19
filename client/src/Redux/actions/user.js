import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_ALL_CHEF,
  GET_CHEF,
} from "../constants/user";

import axios from "axios";

const options = {
  headers: { Authorization: localStorage.getItem("token") },
};

export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signup", newUser);

    dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
    alert(result.data.msg);
    history.push("/signin");
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const result = await axios.post("/api/user/signin", user);
    dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
    history.push("/dashbord");
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.get("/api/user/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const getAllChef = () => async (dispatch) => {
  try {
    const result = await axios.get("/api/chef/", options);
    dispatch({ type: GET_ALL_CHEF, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const getChef = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`/api/chef/${id}`, options);
    dispatch({ type: GET_CHEF, payload: result.data.profile });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const clearErrors = () => {
  return {
    type: "VIDE_ERRORS",
  };
};

export const postProfile = (newProfile) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const { data } = await axios.post("/api/chef", newProfile, options);
    dispatch(getChef(data.id));
  } catch (error) {
    dispatch({ type: FAIL_USER });
  }
};
