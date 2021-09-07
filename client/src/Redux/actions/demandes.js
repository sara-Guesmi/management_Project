import {
  FAIL_DEMANDES,
  GET_DEMANDES_CHEF,
  GET_DEMANDES_CLIENT,
  LOAD_DEMANDES,
} from "../constants/demandes";
import axios from "axios";

const config = {
  headers: {
    authorization: localStorage.getItem("token"),
  },
};

export const getDemandesClient = () => async (dispatch) => {
  dispatch({ type: LOAD_DEMANDES });
  try {
    let { data } = await axios.get("/api/demandes/client", config);
    dispatch({ type: GET_DEMANDES_CLIENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const getDemandesChef = () => async (dispatch) => {
  dispatch({ type: LOAD_DEMANDES });
  try {
    let { data } = await axios.get("/api/demandes/chef", config);
    dispatch({ type: GET_DEMANDES_CHEF, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const postDemande = (demande) => async (dispatch) => {
  try {
    await axios.post("/api/demande", demande, config);
    dispatch(getDemandesClient());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const editDemande = (id, demande) => async (dispatch) => {
  try {
    await axios.put(`/api/demande/${id}`, demande, config);
    dispatch(getDemandesClient());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};

export const deleteDemande = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/demande/${id}`, config);
    dispatch(getDemandesClient());
  } catch (error) {
    dispatch({ type: FAIL_DEMANDES, payload: error.response.data.errors });
  }
};
