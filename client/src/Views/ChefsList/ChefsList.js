import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllApprovedChef, getAllChef } from "../../Redux/actions/user";

import ClientList from "../ClientList/ClientList";
import Chef from "./Chef";
import "./ChefsList.css";

const ChefsList = () => {
  const chefs = useSelector((state) => state.userReducer.chefs);
  const user = useSelector((state) => state.userReducer.user);
  const loadUser = useSelector((state) => state.userReducer.loadUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loadUser && user && user.role == "client") {
      dispatch(getAllApprovedChef());
    } else {
      dispatch(getAllChef());
    }
  }, [dispatch]);

  return (
    <div>
      <h2 className="title-chefProject">Chef Project List</h2>{" "}
      <div className="listChef">
        {chefs && chefs.map((el) => <Chef chef={el} key={el._id} />)}
      </div>
      <ClientList />
    </div>
  );
};

export default ChefsList;
