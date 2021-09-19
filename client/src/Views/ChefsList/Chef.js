import React from "react";
import { Link } from "react-router-dom";
import "./chef.css";

const Chef = ({ chef }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Link to={`/profile/${chef._id}`}>
        <div className="our-team">
          <div className="picture">
            <img
              className="img-fluid"
              src="https://picsum.photos/130/130?image=1027"
              alt="profile"
            />
          </div>
          <div className="team-content">
            <h3 className="name">{chef.name}</h3>
            <h4 className="title">{chef.lastName}</h4>
          </div>
          <ul className="social">
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-facebook"
                aria-hidden="true"
              />
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-twitter"
                aria-hidden="true"
              />
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-google-plus"
                aria-hidden="true"
              />
            </li>
            <li>
              <a
                href="https://codepen.io/collection/XdWJOQ/"
                className="fa fa-linkedin"
                aria-hidden="true"
              />
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Chef;
