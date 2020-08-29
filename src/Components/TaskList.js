import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const { changeStatus, tasks } = props;
  const list = Object.keys(tasks).map((taskId) => {
    const { message, isCompleted } = tasks[taskId];
    return (
      <Task
        key={taskId}
        message={message}
        isCompleted={isCompleted}
        taskId={taskId}
        changeStatus={changeStatus}
      />
    );
  });
  return <div className="tasks">{list}</div>;
};
export default TaskList;
