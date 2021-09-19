import React from "react";
import { useSelector } from "react-redux";

import ChefsList from "../ChefsList/ChefsList";
import Profile from "../Profile/Profile";

const Dashbord = () => {
  const user = useSelector((state) => state.userReducer.user);

  if (user && user.role !== "client") {
    return (
      <div>
        <Profile user={user} />
      </div>
    );
  }
  return (
    <div>
      <ChefsList />
    </div>
  );
};

export default Dashbord;
