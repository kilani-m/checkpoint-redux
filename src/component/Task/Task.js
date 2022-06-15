import React from "react";
import { useDispatch } from "react-redux";
import "./Task.css";
import { DeleteItemData, ChangeStateItemData } from "../../JS/EditData";
import { Link } from "react-router-dom";
import { TaskAbortError } from "@reduxjs/toolkit";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  const handleClickDelete = () => {
    dispatch(DeleteItemData(el.id));
  };
  const handleClickDone = () => {
    dispatch(ChangeStateItemData(el.id));
  };
  return (
    <div className="containeritm">
      <div className="todoitm">
        {el.isDone === true ? (
          <p style={{ color: "green" }}>{el.desc}</p>
        ) : (
          <p style={{ color: "red" }}>{el.desc}</p>
        )}
        
      </div>
      <div className="control">
        <button onClick={handleClickDelete}>X</button>
        <Link to={`/${el.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleClickDone}>IsDone</button>
      </div>
    </div>
  );
};

export default Task;
