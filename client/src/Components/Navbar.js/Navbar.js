import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white p-2 ">
      {" "}
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
        {" "}
        <span className="navbar-toggler-icon" />{" "}
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
              <span className="fa fa-angle-down" />
            </a>
            <div
              className="dropdown-menu"
              id="dropdown-menu1"
              aria-labelledby="navbarDropdown1"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-shopping-cart" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">WearCMS</h6>{" "}
                          <small className="text-muted">For your project</small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-gamepad" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Game+</h6>{" "}
                          <small className="text-muted">
                            Monetization of games
                          </small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-video-camera" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Streetcam</h6>{" "}
                          <small className="text-muted">
                            Keep track all year
                          </small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-comment" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Teamne</h6>{" "}
                          <small className="text-muted">Teamwork</small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-briefcase" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Prospec</h6>{" "}
                          <small className="text-muted">
                            Solutions for your business
                          </small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-bolt" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Booster</h6>{" "}
                          <small className="text-muted">
                            Increase engagement
                          </small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
              <span className="fa fa-angle-down" />
            </a>
            <div
              className="dropdown-menu"
              id="dropdown-menu2"
              aria-labelledby="navbarDropdown2"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-folder" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">WhitePaper</h6>{" "}
                          <small className="text-muted">
                            Marketing and report
                          </small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-question" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">FAQs</h6>{" "}
                          <small className="text-muted">Qs and answers</small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-calculator" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Tools</h6>{" "}
                          <small className="text-muted">All tools</small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-paper-plane" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Success Stories</h6>{" "}
                          <small className="text-muted">Experiences</small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown3"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Customers
              <span className="fa fa-angle-down" />
            </a>
            <div
              className="dropdown-menu"
              id="dropdown-menu3"
              aria-labelledby="navbarDropdown3"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-feed" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">Feedback</h6>{" "}
                          <small className="text-muted">
                            Opinions, complaints
                          </small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row d-flex tab">
                      <div className="fa-icon text-center">
                        {" "}
                        <span className="fa fa-question" />{" "}
                      </div>
                      <div className="d-flex flex-column">
                        {" "}
                        <a className="dropdown-item" href="#">
                          <h6 className="mb-0">FAQs</h6>{" "}
                          <small className="text-muted">Qs and answers</small>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
