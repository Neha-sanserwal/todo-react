import React, { useState } from "react";
import Input from "./Input";

const TasksHeading = (props) => {
  const [editMode, setEditMode] = useState(false);

  const handleValue = (value) => {
    props.changeHeading(value);
    setEditMode(false);
  };

  const { value } = props;
  let heading = <h1 onClick={() => setEditMode(true)}>{props.value}</h1>;
  if (editMode) {
    heading = (
      <Input
        hasBoldText={true}
        initialValue={value}
        handleValue={handleValue}
      />
    );
  }
  return heading;
};

export default TasksHeading;
