import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import Demande from "../../Components/AddDemande/Demande";
import { isEdit } from "../../Redux/actions/demandes";

import { getChef } from "../../Redux/actions/user";
// import Demande from ".";

import "./Profile.css";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const user = useSelector((state) => state.userReducer.user);
  const profile = useSelector((state) => state.userReducer.profile);

  const dispatch = useDispatch();
  const { id_chef } = useParams();

  const id = id_chef || user._id;

  useEffect(() => {
    dispatch(getChef(id));
    dispatch(isEdit(false));
  }, [id, dispatch]);

  return loadUser ? (
    <CircularProgress />
  ) : user && user.role == "client" ? (
    <div>
      <Demande onClick={dispatch(isEdit(false))} />
      <ProfileCard profile={profile} />
    </div>
  ) : !loadUser && profile && profile ? (
    <ProfileCard profile={profile} />
  ) : (
    <Redirect to={`/addProfile/${id}`} />
  );
};

export default Profile;
