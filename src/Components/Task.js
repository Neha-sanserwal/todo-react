import React from "react";
const isCompleted = (status) => {
  return status ? "complete" : "un-complete";
};

const Task = (props) => {
  const { status, message, taskId, handleClick } = props;
  const className = status.inProcess
    ? "in-process"
    : isCompleted(status.isCompleted);
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
