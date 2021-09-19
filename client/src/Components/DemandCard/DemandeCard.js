import React from "react";

import { useDispatch, useSelector } from "react-redux";

import "./DemandeCard.css";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Checkbox } from "@material-ui/core";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteDemande, updateStatus } from "../../Redux/actions/demandes";
import Demande from "../AddDemande/Demande";

const DemandeCard = ({ demande }) => {
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  const handleChange = () => {
    if (demande.approved) {
      return alert("demande is already approved ");
    }
    const confirmBox = window.confirm("Are You sure to accept this demande?");
    return dispatch(updateStatus(demande._id));
  };

  const handleDelete = () => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Demande?"
    );
    if (confirmBox) {
      dispatch(deleteDemande(demande._id));
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
            ) : null}
          </div>
        ) : (
          <Checkbox
            checked={demande.approved}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        )}
      </div>
    </div>
  );
};

export default DemandeCard;
