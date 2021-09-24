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
} from "../constants/user";

import axios from "axios";

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
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const currentUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const getAllApprovedChef = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get("/api/chef/approved", config);
    dispatch({ type: GET_ALL_CHEF, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
export const getAllChef = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get("/api/admin/allChef", config);
    dispatch({ type: GET_ALL_CHEF, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const getAllClient = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get("/api/admin/allClient", config);
    dispatch({ type: GET_ALL_CLIENT, payload: result.data.clients });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

export const getChef = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get(`/api/chef/${id}`, config);
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

export const postProfile = (newProfile, id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const { data } = await axios.post("/api/chef", { newProfile, id }, config);
    dispatch(getChef(data.id));
  } catch (error) {
    dispatch({ type: FAIL_USER });
  }
};

export const updateChefStatus = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/admin/changeStatus/${id}`, {}, config);
    dispatch(getAllChef());
    dispatch(getAllClient());
  } catch (error) {
    dispatch({ type: FAIL_USER });
  }
};

export const updateBannedUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/admin/bannedUser/${id}`, {}, config);
    dispatch(getAllChef());
    dispatch(getAllClient());
  } catch (error) {
    dispatch({ type: FAIL_USER });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/admin/deleteUser/${id}`, config);

    dispatch(getAllChef());
    dispatch(getAllClient());
  } catch (error) {
    dispatch({ type: FAIL_USER });
  }
};
