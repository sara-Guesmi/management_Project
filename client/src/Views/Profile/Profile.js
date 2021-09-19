import { CircularProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import Demande from "../../Components/AddDemande/Demande";
import { isEdit } from "../../Redux/actions/demandes";

import { getChef } from "../../Redux/actions/user";
// import Demande from ".";

import "./Profile.css";

const Profile = () => {
  const profile = useSelector((state) => state.userReducer.profile);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const user = useSelector((state) => state.userReducer.user);

  console.log(profile);
  const dispatch = useDispatch();

  const { id_chef } = useParams();

  const id = id_chef || user._id;

  useEffect(() => {
    dispatch(getChef(id));
    dispatch(isEdit(false));
  }, [dispatch, id]);

  if (user && user.role == "chef-projet" && profile == null) {
    return <Redirect to="/addProfile" />;
  }

  return loadUser ? (
    <CircularProgress />
  ) : (
    <section id="about-me">
      {/* <button>Contact This Chef Project</button> */}
      {user && user.role == "client" ? (
        <Demande onClick={dispatch(isEdit(false))} />
      ) : null}

      <img
        className="avatar rotate"
        src="https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png"
        alt="imageSrc"
      />
    </section>
  );
};

export default Profile;
