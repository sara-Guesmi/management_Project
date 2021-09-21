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
  const profile = useSelector((state) => state.userReducer.profile);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const { id_chef } = useParams();

  const id = id_chef || user._id;

  useEffect(() => {
    dispatch(getChef(id));
    dispatch(isEdit(false));
  }, [dispatch, id]);

  return loadUser ? (
    <CircularProgress />
  ) : user && user.role == "client" ? (
    <div>
      <Demande onClick={dispatch(isEdit(false))} />

      <ProfileCard profile={profile} />
    </div>
  ) : profile && profile ? (
    <ProfileCard profile={profile} />
  ) : (
    <Redirect to="/addProfile" />
  );
};
export default Profile;

//  user && user.role == "chef-projet" && profile && profile == null ? (
//   <Redirect to="/addProfile" />
// ) : user && user.role == "chef-projet" ? (
//   <ProfileCard profile={profile} />
// ) : (
//   // else if the user is client consult profile and send demande

//   // else if the user is admin show profile and update status approved
//   <section id="profile-card">
//     {/* <button>Contact This Chef Project</button> */}
//     {user && user.role == "client" ? (
//       <div>
//         <Demande onClick={dispatch(isEdit(false))} />

//         <ProfileCard profile={profile} />
//       </div>
//     ) : null}
//   </section>
// );
