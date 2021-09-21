import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./chef.css";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BlockIcon from "@mui/icons-material/Block";

import {
  deleteUser,
  updateBannedUser,
  updateChefStatus,
} from "../../Redux/actions/user";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

const Chef = ({ chef }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  // -------------------------------------
  const handleStatus = () => {
    if (chef.verified) {
      return alert("demande is already approved ");
    } else {
      const confirmBox = window.confirm("Are You sure to Verify?");
      if (confirmBox) {
        return dispatch(updateChefStatus(chef._id));
      }
    }
  };

  const handleBanned = () => {
    const confirmBox = window.confirm("Are You sure to bann user?");
    if (confirmBox) {
      return dispatch(updateBannedUser(chef._id));
    }
  };

  const handleDelete = () => {
    const confirmBox = window.confirm("Are You sure to delete user?");
    if (confirmBox) {
      return dispatch(deleteUser(chef._id));
    }
  };
  // ------------------------------------------
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      {user && user.role == "admin" ? (
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
            <h4 className="title">{chef.email}</h4>
          </div>
          {!chef.verified ? (
            <LibraryAddCheckOutlinedIcon onClick={handleStatus} />
          ) : (
            <CheckBoxIcon />
          )}
          {!chef.banned ? (
            <BlockIcon style={{ fill: "green" }} onClick={handleBanned} />
          ) : (
            <BlockIcon style={{ fill: "red" }} onClick={handleBanned} />
          )}
          <DeleteOutlineOutlined onClick={handleDelete} />
        </div>
      ) : (
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
          </div>
        </Link>
      )}
    </div>
  );
};

export default Chef;
