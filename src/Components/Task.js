import React from "react";

const Task = (props) => {
  const { status, message, taskId, toggleStatus, deleteTask } = props;
  return (
    <div className="task-box">
      <div className={`task ${status}`} onClick={() => toggleStatus(taskId)}>
        <div className="indicator"></div>
        <div className="message" key={taskId}>
          {message}
        </div>
      </div>
      <div className="delete-btn" onClick={() => deleteTask(taskId)}>
        X
      </div>
    </div>
  );
};
export default Task;
