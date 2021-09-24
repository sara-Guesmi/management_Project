import {
  FAIL_DEMANDES,
  GET_DEMANDE,
  GET_DEMANDES,
  IS_EDIT,
  LOAD_DEMANDES,
} from "../constants/demandes";
import axios from "axios";

export const getDemandesClient = () => async (dispatch) => {
  dispatch({ type: LOAD_DEMANDES });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let { data } = await axios.get("/api/demande/client/alldemande", config);
    dispatch({ type: GET_DEMANDES, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const getDemande = (id_demande) => async (dispatch) => {
  dispatch({ type: LOAD_DEMANDES });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let { data } = await axios.get(`/api/demande/${id_demande}`, config);
    dispatch({ type: GET_DEMANDE, payload: data.demande });
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};
export const getDemandesChef = () => async (dispatch) => {
  dispatch({ type: LOAD_DEMANDES });
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let { data } = await axios.get("/api/demande/chef", config);
    dispatch({ type: GET_DEMANDES, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES });
    console.log(error);
  }
};

export const postDemande = (id_chef, demande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.post(`/api/demande/${id_chef}`, demande, config);
    dispatch(getDemandesClient());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const editDemande = (id_demande, demande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(`/api/demande/${id_demande}`, demande, config);
    dispatch(getDemandesClient());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};
export const updateStatusToPending = (id_demande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(
      `/api/demande/updateStatusToPending/${id_demande}`,
      {},
      config
    );
    dispatch(getDemandesChef());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const updateStatusToDone = (id_demande) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put(
      `/api/demande/updateStatusToDone/${id_demande}`,
      {},
      config
    );
    dispatch(getDemandesChef());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};
export const deleteDemande = (id) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`/api/demande/${id}`, config);
    dispatch(getDemandesClient());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const isEdit = (payload) => {
  return { type: IS_EDIT, payload };
};
