import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { logout } from "../../Redux/actions/user";
import { Link, useHistory } from "react-router-dom";
import Logo from "../layout/partials/Logo";
const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <nav className="navbar navbar-expand-md navbar-light p-2 ">
        <button
          className="navbar-toggler mr-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Logo />
            </li>

            {user && user.role === "client" ? (
              <li className="nav-item">
                <Link to="/dashbord">Chef List</Link>
              </li>
            ) : user && user.role === "chef-projet" ? (
              <li className="nav-item">
                <Link to="/dashbord">Dhashbord</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/dashbord">user List</Link>
              </li>
            )}
            <span className="fa fa-angle-down" />

            {user && user.role !== "admin" && (
              <li className="nav-item">
                <Link to="/listDemande">My demandes</Link>
              </li>
            )}
            <span className="fa fa-angle-down" />
          </ul>
        </div>
        <button
          onClick={() => {
            dispatch(logout());
            history.push("/");
          }}
          id="logout-btn"
        >
          Logout
        </button>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default Navbar;
