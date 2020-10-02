import React from "react";
import styled from "styled-components";
import Task from "./Task";
import WithDelete from "./WithDelete";

const Tasks = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 3rem;
  padding: 1rem 0 1rem 0;
`;

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
  return <Tasks>{list}</Tasks>;
};
