import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { logout } from "../../Redux/actions/user";
import { Link, NavLink, useHistory } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white p-2 ">
        <img
          src="https://icon-library.com/images/management-icon-png/management-icon-png-17.jpg"
          alt="logo"
          width="5%"
        />
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
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown1"
                role="button"
              >
                {user && user.role == "client" ? (
                  <Link to="/dashbord">Chef List</Link>
                ) : (
                  <Link to="/dashbord">Dhashbord</Link>
                )}
                <span className="fa fa-angle-down" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown2"
                role="button"
              >
                Resources
                <span className="fa fa-angle-down" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown3"
                role="button"
              >
                <NavLink to="/listDemande">My demandes</NavLink>
                <span className="fa fa-angle-down" />
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={() => {
            dispatch(logout());
            history.push("/signin");
          }}
        >
          logout
        </button>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default Navbar;
