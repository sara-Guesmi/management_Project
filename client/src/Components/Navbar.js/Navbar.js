import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { logout } from "../../Redux/actions/user";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white p-2 ">
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
              {" "}
              <Link to="/dashbord">
                <img
                  src="https://icon-library.com/images/management-icon-png/management-icon-png-17.jpg"
                  alt="logo"
                  width="50px"
                />
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown1"
                role="button"
              >
                {user && user.role === "client" ? (
                  <Link to="/dashbord">Chef List</Link>
                ) : user && user.role === "chef-projet" ? (
                  <Link to="/dashbord">Dhashbord</Link>
                ) : (
                  <Link to="/dashbord">user List</Link>
                )}
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
                {user && user.role !== "admin" ? (
                  <Link to="/listDemande">My demandes</Link>
                ) : null}
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
