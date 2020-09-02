import React from "react";

const Task = (props) => {
  const { status, message, taskId, handleClick, handleDelete } = props;
  return (
    <div className="task">
      <div className={` ${status}`} onClick={() => handleClick(taskId)}>
        <div className="indicator"></div>
        <div className="message" key={taskId}>
          {message}
        </div>
      </div>
      <div onClick={() => handleDelete(taskId)}>X</div>
    </div>
  );
};
export default Task;
