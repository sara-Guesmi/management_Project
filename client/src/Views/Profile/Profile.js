import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getChef } from "../../Redux/actions/user";
import Demande from "./Demande";

import "./Profile.css";

const Profile = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChef(match.params.id));
  }, []);

  return (
    <section id="about-me">
      {/* <button>Contact This Chef Project</button> */}
      <Demande />

      <img
        className="avatar rotate"
        src="https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png"
        alt="imageSrc"
      />
    </section>
  );
};

export default Profile;
