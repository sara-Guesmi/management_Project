import React from "react";

import "./ProfileCard.css";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isEditProfile } from "../../Redux/actions/user";

const ProfileCard = ({ profile }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  return profile && profile ? (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      {profile && profile.gender === "female" ? (
                        <img
                          width="20%"
                          src="https://cdn1.iconfinder.com/data/icons/avatar-11/76/5-512.png"
                          className="img-radius"
                          alt="femalechef"
                        />
                      ) : (
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile"
                        />
                      )}
                    </div>
                    <h6 className="f-w-600">
                      {profile && profile.id_chef.name}{" "}
                      {profile && profile.id_chef.lastName}
                    </h6>
                    <p>{profile && profile.domain}</p>
                    {user && user.role === "chef-projet" && (
                      <Link to={`/addProfile/${profile.id_chef._id}`}>
                        <EditIcon
                          onClick={() => dispatch(isEditProfile(true))}
                        />
                      </Link>
                    )}{" "}
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">
                          {profile && profile.id_chef.email}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">
                          {profile && profile.phoneNumber}
                        </h6>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Job Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Departement</p>
                        <h6 className="text-muted f-w-400">
                          {" "}
                          {profile && profile.departement}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Most Viewed</p>
                        <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                      </div>
                    </div>
                    <ul className="social-link list-unstyled m-t-40 m-b-10">
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="facebook"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-facebook feather icon-facebook facebook"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="twitter"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-twitter feather icon-twitter twitter"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="instagram"
                          data-abc="true"
                        >
                          <i
                            className="mdi mdi-instagram feather icon-instagram instagram"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h2>Profile is not Created Yet</h2>
  );
};

export default ProfileCard;
