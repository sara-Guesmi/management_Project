import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./chef.css";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BlockIcon from "@mui/icons-material/Block";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import {
  deleteUser,
  updateBannedUser,
  updateChefStatus,
} from "../../Redux/actions/user";

const Chef = ({ chef }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  // -----------------------------------

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
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      {/* Card*/}
      <div className="card shadow-sm border-0 rounded">
        <div className="card-body p-0">
          <img
            src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
            alt=""
            className="w-100 card-img-top"
          />
          <div className="p-4">
            <h5 className="mb-0">{chef.name}</h5>
            <p className="small text-muted">Email:{chef.email}</p>
            {user && user.role === "admin" ? (
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item m-0">
                  {!chef.verified ? (
                    <LibraryAddCheckOutlinedIcon onClick={handleStatus} />
                  ) : (
                    <CheckBoxIcon />
                  )}
                </li>
                <li className="list-inline-item m-0">
                  {!chef.banned ? (
                    <BlockIcon
                      style={{ fill: "green" }}
                      onClick={handleBanned}
                    />
                  ) : (
                    <BlockIcon style={{ fill: "red" }} onClick={handleBanned} />
                  )}
                </li>
                <li className="list-inline-item m-0">
                  <DeleteOutlineOutlined onClick={handleDelete} />
                </li>
              </ul>
            ) : (
              <ul>
                <Link to={`/profile/${chef._id}`}>
                  <button>Details & Contact</button>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
