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

  // ********************************************
  // change the status of the demande from send to approved
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
  // delete the demande if it is not approved yet
  const handleDelete = () => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Demande?"
    );
    if (confirmBox) {
      dispatch(deleteDemande(demande._id));
    }
  };
  // the chef can approve the demande from pending to done
  const handleDone = () => {
    const confirmBox = window.confirm("Are You sure That you done that Taks?");
    if (confirmBox) {
      return dispatch(updateStatusToDone(demande._id));
    }
  };
  // --------------------------------------------------------
  return (
    <div
      className={
        demande.status === "send"
          ? "box-demande box-down red"
          : demande.status === "pending"
          ? "box-demande box-down orange"
          : "box-demande box-down cyan"
      }
    >
      <h2>{demande.text}</h2>
      <p>{demande.dueDate.toLocaleString("en-us", { weekday: "long" })}</p>
      <h6>TO:{demande.id_chef.name + " "}</h6>
      <div className="approvedDemande">
        {!demande.approved ? (
          <div>
            <PendingActionsIcon /> <p>Not accepted yet</p>{" "}
          </div>
        ) : (
          <div>
            {" "}
            <DoneIcon />
            <p>accepted Task</p>
          </div>
        )}

        {user && user.role === "client" ? (
          <div>
            {" "}
            {!demande.approved ? (
              <div>
                <Demande demande={demande} />
                <DeleteIcon onClick={handleDelete} />
              </div>
            ) : demande.status === "done" ? (
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
            {demande.status === "done" ? (
              <div>
                <p>Done </p> <DeleteIcon onClick={handleDelete} />
              </div>
            ) : demande.status === "pending" ? (
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
