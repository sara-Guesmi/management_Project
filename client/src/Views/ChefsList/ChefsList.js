import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllApprovedChef, getAllChef } from "../../Redux/actions/user";

import ClientList from "../ClientList/ClientList";
import Chef from "./Chef";
import "./ChefsList.css";

const ChefsList = () => {
  const chefs = useSelector((state) => state.userReducer.chefs);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.role === "client") {
      dispatch(getAllApprovedChef());
    } else {
      dispatch(getAllChef());
    }
  }, [dispatch, user]);

  return (
    <div className="container py-5">
      <h2 className="title-chefProject">Chef Project List</h2>{" "}
      <div className="row pb-5 mb-4">
        {chefs && chefs.map((el) => <Chef chef={el} key={el._id} />)}
      </div>
      <ClientList />
    </div>
  );
};

export default ChefsList;
