import React, { useState } from "react";
import "./Signin.css";
import { useDispatch } from "react-redux";
import { register } from "../Redux/actions/user";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    role: "client",
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(user));
    setUser({ role: "client" });
  };

  return (
    <div className="login-root">
      <div
        className="box-root flex-flex flex-direction--column"
        style={{ minHeight: "100vh", flexGrow: 1 }}
      >
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div
              className="box-root flex-flex"
              style={{ gridArea: "top / start / 8 / end" }}
            >
              <div
                className="box-root"
                style={{
                  backgroundImage:
                    "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                  flexGrow: 1,
                }}
              ></div>
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "4 / 2 / auto / 5" }}
            >
              <div
                className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "6 / start / auto / 2" }}
            >
              <div
                className="box-root box-background--blue800"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "7 / start / auto / 4" }}
            >
              <div
                className="box-root box-background--blue animationLeftRight"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "8 / 4 / auto / 6" }}
            >
              <div
                className="box-root box-background--gray100 animationLeftRight tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "2 / 15 / auto / end" }}
            >
              <div
                className="box-root box-background--cyan200 animationRightLeft tans4s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "3 / 14 / auto / end" }}
            >
              <div
                className="box-root box-background--blue animationRightLeft"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "4 / 17 / auto / 20" }}
            >
              <div
                className="box-root box-background--gray100 animationRightLeft tans4s"
                style={{ flexGrow: 1 }}
              />
            </div>
            <div
              className="box-root flex-flex"
              style={{ gridArea: "5 / 14 / auto / 17" }}
            >
              <div
                className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                style={{ flexGrow: 1 }}
              />
            </div>
          </div>
        </div>
        <div
          className="box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexGrow: 1, zIndex: 9 }}
        >
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>
              <Link to="/"> Project</Link>
            </h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Create an account</span>
                <form id="stripe-login" onSubmit={handleUser}>
                  <div className="field padding-bottom--24">
                    <label htmlFor="Name">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={user.name}
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="LastName">LastName</label>
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      required
                      value={user.lastName}
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      required
                      name="email"
                      onChange={handleChange}
                      value={user.email}
                      autoComplete="username"
                    />
                  </div>
                  <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                      <label htmlFor="password">Password</label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      required
                      onChange={handleChange}
                      value={user.password}
                      autoComplete="current-password"
                    />{" "}
                    <div className="reset-pass">Forgot your password?</div>
                  </div>
                  <div className="field padding-bottom--24">
                    <label htmlFor="email">Choose Your Role</label>
                    <select
                      value={user.role}
                      name="role"
                      required
                      onChange={handleChange}
                    >
                      <option value="client">client</option>
                      <option value="chef-projet">Chef de Projet</option>
                    </select>
                  </div>
                  <div className="field padding-bottom--24">
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="Continue"
                      onClick={handleUser}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>
                You have already an account <Link to="/signin">Sign In</Link>
              </span>
              <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span>© Project</span>
                <span>Contact</span>
                <span>Privacy &amp; terms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
