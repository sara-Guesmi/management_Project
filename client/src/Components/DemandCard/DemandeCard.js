import React from "react";

import { useDispatch, useSelector } from "react-redux";

import "./DemandeCard.css";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Checkbox } from "@material-ui/core";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import {
  deleteDemande,
  updateStatusToDone,
  updateStatusToPending,
} from "../../Redux/actions/demandes";
import Demande from "../AddDemande/Demande";

const DemandeCard = ({ demande }) => {
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  const handleChange = () => {
    if (demande.approved) {
      return alert("demande is already approved ");
    } else {
      const confirmBox = window.confirm("Are You sure to accept this demande?");
      if (confirmBox) {
        return dispatch(updateStatusToPending(demande._id));
      }
    }
  };

  const handleDelete = () => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Demande?"
    );
    if (confirmBox) {
      dispatch(deleteDemande(demande._id));
    }
  };
  const handleDone = () => {
    const confirmBox = window.confirm("Are You sure That you done that Taks?");
    if (confirmBox) {
      return dispatch(updateStatusToDone(demande._id));
    }
  };

  return (
    <div
      class={
        demande.approved
          ? "box-demande box-down cyan"
          : "box-demande box-down red"
      }
    >
      <h2>{demande.text}</h2>
      <p>{demande.dueDate}</p>
      <div className="approvedDemande">
        {!demande.approved ? <PendingActionsIcon /> : <DoneIcon />}

        {user && user.role == "client" ? (
          <div>
            {" "}
            {!demande.approved ? (
              <div>
                <Demande demande={demande} />
                <DeleteIcon onClick={handleDelete} />
              </div>
            ) : demande.status == "done" ? (
              <div>
                <DeleteIcon onClick={handleDelete} />
                <p>{demande.status}</p>
              </div>
            ) : (
              <div>
                <p>{demande.status}</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Checkbox
              checked={demande.approved}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            {demande.status == "done" ? (
              <div>
                <p>Done </p> <DeleteIcon onClick={handleDelete} />
              </div>
            ) : demande.status == "pending" ? (
              <div>
                <p>pending</p>
                <div className="done-task">
                  <p>Mark as resolved</p>
                  <CheckCircleOutlineIcon onClick={handleDone} />
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default DemandeCard;
