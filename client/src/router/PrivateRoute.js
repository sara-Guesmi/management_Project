import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
