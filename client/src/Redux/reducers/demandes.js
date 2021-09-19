import {
  FAIL_DEMANDES,
  GET_DEMANDES,
  LOAD_DEMANDES,
  IS_EDIT,
  GET_DEMANDE,
} from "../constants/demandes";
import { LOGOUT_USER } from "../constants/user";

const initialState = {
  demandes: null,
  loadDemandes: false,
  errors: false,
  isEdit: true,
  demande: null,
};

const demandeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DEMANDES:
      return { ...state, loadDemandes: true };
    case GET_DEMANDES:
      return {
        ...state,
        loadDemandes: false,
        demandes: payload.demandes,

        errors: false,
      };
    case GET_DEMANDE:
      return {
        ...state,
        loadDemandes: false,
        demande: payload,

        errors: false,
      };

    case FAIL_DEMANDES:
      return { ...state, loadDemandes: false, errors: true };
    case IS_EDIT:
      return { ...state, isEdit: payload };
    case LOGOUT_USER:
      return {
        demandes: null,
        loadDemandes: false,
        errors: false,
        isEdit: true,
        demande: null,
      };
    default:
      return state;
  }
};
export default demandeReducer;
