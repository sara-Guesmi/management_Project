import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../../Redux/actions/user";

toast.configure();
const Notification = ({ error, status }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => {
      dispatch(clearErrors());
    };
  }, [show]);
  return <div>{show && toast(error.msg)}</div>;
};

export default Notification;
