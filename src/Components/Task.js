import React from "react";

const Task = (props) => {
  const { status, message, taskId, handleClick } = props;
  return (
    <div className={`task  ${status}`} onClick={() => handleClick(taskId)}>
      <div className="indicator"></div>
      <div className="message" key={taskId}>
        {message}
      </div>
    </div>
  );
};
export default Task;
