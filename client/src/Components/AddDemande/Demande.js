import React, { useEffect, useState } from "react";

import Modal from "@material-ui/core/Modal";
import { TextField } from "@material-ui/core";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import EditIcon from "@mui/icons-material/Edit";
import "./Demande.css";

import { useDispatch, useSelector } from "react-redux";
import { editDemande, postDemande } from "../../Redux/actions/demandes";
import { useHistory, useParams } from "react-router";

export default function Demande({ demande }) {
  const [open, setOpen] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const [text, setText] = useState("");
  const isEdit = useSelector((state) => state.demandeReducer.isEdit);
  const today = new Date();

  const dispatch = useDispatch();
  const history = useHistory();
  const { id_chef } = useParams();

  // ----------------------------------------------------------
  useEffect(() => {
    if (isEdit) {
      setDueDate(demande.dueDate);
      setText(demande.text);
    }
  }, [demande, isEdit]);

  // /---------------------------------------------------------------------
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setText(demande ? demande.text : "");
    setDueDate(demande ? demande.dueDate : "");
  };

  const sendDemande = () => {
    if (!text || !dueDate) {
      alert("text and date are quired");
    } else {
      if (!isEdit) {
        dispatch(postDemande(id_chef, { text, dueDate }));
      } else {
        dispatch(editDemande(demande._id, { text, dueDate }));
      }
      handleClose();
      history.push("/listDemande");
    }
  };

  // ----------------------------------------------------------------------------
  const body = (
    <div>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close" />
                <div className="screen-header-button maximize" />
                <div className="screen-header-button minimize" />
              </div>
              <div onClick={handleClose} className="screen-header-right p-3">
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
              </div>
            </div>
            {/* <hr /> */}
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>Send</span>
                  <span> Your Demand</span>
                </div>
              </div>
              <div className="screen-body-item demand">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      type="text-area"
                      className="app-form-control"
                      placeholder="enter the description of your demande"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                      required
                    />
                  </div>
                  <div
                    className="app-form-group z"
                    style={{ width: "200", height: "200px" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        required
                        label="Set the due Date"
                        format="MM/dd/yyyy"
                        value={dueDate}
                        onChange={(newValue) => {
                          setDueDate(newValue);
                        }}
                        minDate={today}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="app-form-group buttons">
                    <button onClick={handleClose} className="app-form-button">
                      CANCEL
                    </button>
                    <button
                      onClick={() => sendDemande()}
                      className="app-form-button"
                    >
                      {isEdit ? "EDIT" : "SEND"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {isEdit ? (
        <EditIcon onClick={handleOpen} />
      ) : (
        <button type="button" className="btnDemande" onClick={handleOpen}>
          Send Your Demand
        </button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

Demande.defultProps = {
  demande: {
    text: "",
    dueDate: "",
  },
};
