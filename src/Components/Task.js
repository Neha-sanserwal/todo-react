import React from "react";
const getClassName = (status) => {
  return status ? "complete" : "un-complete";
};

const Task = (props) => {
  const { status, message, taskId, handleClick } = props;
  const { isCompleted, inProcess } = status;
  const className = inProcess ? "in-process" : getClassName(isCompleted);
  return (
    <div className={`task  ${className}`} onClick={() => handleClick(taskId)}>
      <div className="indicator"></div>
      <div className="message" key={taskId}>
        {message}
      </div>
    </div>
  );
};
export default Task;
