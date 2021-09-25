import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DemandeCard from "../../Components/DemandCard/DemandeCard";

import {
  getDemandesChef,
  getDemandesClient,
  isEdit,
} from "../../Redux/actions/demandes";

import { CircularProgress } from "@mui/material";
import "./ListDemandes.css";

const ListDemande = () => {
  const demandes = useSelector((state) => state.demandeReducer.demandes);
  const user = useSelector((state) => state.userReducer.user);
  const loadDemandes = useSelector(
    (state) => state.demandeReducer.loadDemandes
  );

  const errors = useSelector((state) => state.demandeReducer.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.role == "client") {
      dispatch(getDemandesClient());
    } else {
      dispatch(getDemandesChef());
    }
  }, [dispatch, user]);
  useEffect(() => {
    dispatch(isEdit(true));
  }, []);

  return (
    <div className="list-demande-container">
      {loadDemandes ? (
        <CircularProgress />
      ) : errors ? (
        <h1>error to fetch the demandes</h1>
      ) : demandes && demandes.length == 0 && user && user.role == "client" ? (
        <h1 className="demande-title">You did post no demande yet</h1>
      ) : demandes &&
        demandes.length == 0 &&
        user &&
        user.role == "chef-projet" ? (
        <h1 className="demande-title">You did not recieve any demande yet</h1>
      ) : (
        <div className="list-demandes">
          {demandes &&
            demandes.map((el) => <DemandeCard demande={el} key={el._id} />)}
        </div>
      )}
    </div>
  );
};

export default ListDemande;
