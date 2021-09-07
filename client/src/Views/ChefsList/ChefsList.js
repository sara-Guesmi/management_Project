import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChef } from "../../Redux/actions/user";
import Chef from "./Chef";
import "./ChefsList.css";
const ChefsList = () => {
  const chefs = useSelector((state) => state.userReducer.chefs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChef());
  }, []);

  return (
    <div className="listChef">
      {chefs && chefs.map((el) => <Chef chef={el} />)}
    </div>
  );
};

export default ChefsList;
