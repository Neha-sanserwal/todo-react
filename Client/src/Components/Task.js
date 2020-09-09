import React from "react";
const Task = (props) => {
  const { status, message, id, toggleStatus } = props;
  return (
    <div className={`task ${status}`} onClick={toggleStatus}>
      <div className="indicator"></div>
      <div className="message" key={id}>
        {message}
      </div>
    </div>
  );
};
export default Task;
