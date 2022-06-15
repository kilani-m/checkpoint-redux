import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import "./ListTask.css";
import Task from "../Task/Task";

const ListTask = () => {
  const count = useSelector((state) => state.EditData.data);
  ////////
  const options = [
    { value: "All", label: "All" },
    { value: "Done", label: "Done" },
    { value: "NotDone", label: "NotDone" },
  ];
  const [selectedOption, setSelectedOption] = useState({
    value: "All",
    label: "All",
  });
  return (
    <div  >
      <div className="list">
        {count.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>Add task</h2>
        ) : selectedOption.value === "NotDone" ? (
          count
            .filter((el) => el.isDone === false)
            .map((el) => <Task key={el.id} el={el} />)
        ) : selectedOption.value === "Done" ? (
          count
            .filter((el) => el.isDone === true)
            .map((el) => <Task key={el.id} el={el} />)
        ) : (
          count.map((el) => <Task key={el.id} el={el} />)
        )}
      </div>
      <div>
        <Select
          className="select"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
};

export default ListTask;
