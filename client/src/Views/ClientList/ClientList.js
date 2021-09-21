import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllClient } from "../../Redux/actions/user";

import Chef from "../ChefsList/Chef";

const ClientList = () => {
  const user = useSelector((state) => state.userReducer.user);
  const client = useSelector((state) => state.userReducer.clients);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.role == "admin") {
      dispatch(getAllClient());
    }
  }, [dispatch, user]);

  return user && user.role == "admin" ? (
    <div>
      {loadUser ? (
        <CircularProgress />
      ) : errors ? (
        <h2>errors to fetch user</h2>
      ) : client && client.length == 0 ? null : (
        <div>
          <h2 className="title-chefProject">Client List</h2>{" "}
          <div className="listChef">
            {client && client.map((el) => <Chef chef={el} key={el._id} />)}
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default ClientList;
