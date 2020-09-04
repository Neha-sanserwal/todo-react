import React from "react";
import Task from "./Task";
import WithDelete from "./WithDelete";

export default (props) => {
  const { tasks, handleStatus, deleteTask } = props;
  const list = tasks.map((task, index) => {
    const { message, status, taskId } = task;
    const TaskWithDelete = WithDelete(Task, deleteTask);
    return (
      <TaskWithDelete
        key={index}
        message={message}
        status={status}
        id={taskId}
        toggleStatus={() => handleStatus(taskId)}
      />
    );
  });
  return <div className="tasks">{list}</div>;
};
