import React from "react";
import Task from "./Task";

export default (props) => {
  const { tasks, handleStatus, deleteTask } = props;
  const list = tasks.map((task, index) => {
    const { message, status, taskId } = task;
    return (
      <Task
        key={index}
        message={message}
        status={status}
        taskId={taskId}
        toggleStatus={() => handleStatus(taskId)}
        deleteTask={() => deleteTask(taskId)}
      />
    );
  });
  return <div className="tasks">{list}</div>;
};
