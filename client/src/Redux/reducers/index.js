import { combineReducers } from "redux";
import userReducer from "./user";
import demandeReducer from "./demandes";
const rootReducer = combineReducers({ userReducer, demandeReducer });
export default rootReducer;
