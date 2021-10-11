import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../../Redux/actions/user";

toast.configure();

const Notification = ({ error }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      dispatch(clearErrors());
    }, 5000);
  }, [dispatch]);

  return <div>{show && toast.error(error.msg)}</div>;
};

export default Notification;
