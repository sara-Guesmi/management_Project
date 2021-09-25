import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllApprovedChef, getAllChef } from "../../Redux/actions/user";

import ChefsList from "../ChefsList/ChefsList";
import Profile from "../Profile/Profile";

const Dashbord = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChef());
    dispatch(getAllApprovedChef());
  }, []);

  if (user && user.role == "chef-projet") {
    return (
      <div>
        <Profile user={user} />
      </div>
    );
  } else {
    return (
      <div>
        <ChefsList />
      </div>
    );
  }
};

export default Dashbord;
