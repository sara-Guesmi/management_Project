import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <section id="about-me">
      <h1>
        Hello my name is <span className="rotate text-important">Client</span>
        ,
        <br />
        and i make horrible websites
      </h1>
      <img
        className="avatar rotate"
        src="https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png"
        alt="imageSrc"
      />
    </section>
  );
};

export default Profile;
