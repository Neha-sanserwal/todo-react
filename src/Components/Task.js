import React from "react";

const Task = (props) => {
  const { isCompleted, message, taskId } = this.props;
  const className = isCompleted ? "complete" : "un-complete";
  return (
    <div
      className={`task  ${className}`}
      onClick={() => this.props.handleClick(taskId)}
    >
      <div className="indicator"></div>
      <div className="message" key={taskId}>
        {message}
      </div>
    </div>
  );
};
export default Task;
