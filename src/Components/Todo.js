import React, { useState } from "react";
import Input from "./Input";
import TaskList from "./TaskList";
import TasksHeading from "./TasksHeading";
import WithDelete from "./WithDelete";
import { useEffect } from "react";
import * as Api from "../Api";
import styled from "styled-components";

const TodoBox = styled.div`
  display: flex;
  flex-flow: column;
  padding: 3rem;
  width: 60%;
  margin: 0 auto;
  justify-content: space-evenly;
`;

const Todo = (props) => {
  const [heading, setHeading] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    Api.getCurrentHeading().then(({ heading }) => {
      setHeading(heading);
    });
    Api.getAllTasks().then(({ tasks }) => setTasks(tasks));
  }, []);

  const saveTask = (message) => {
    Api.saveTask(message)
      .then(Api.getAllTasks)
      .then(({ tasks }) => {
        setTasks(tasks);
      });
  }; // saves task in state

  const toggleTaskStatus = (taskId) => {
    Api.toggleTaskStatus(taskId)
      .then(Api.getAllTasks)
      .then(({ tasks }) => setTasks(tasks));
  };

  const changeHeading = (value) => {
    Api.updateHeading(value)
      .then(Api.getCurrentHeading)
      .then(({ heading }) => {
        setHeading(heading);
      });
  };

  const deleteTasks = () => {
    Api.deleteAllTasks()
      .then(Api.getCurrentHeading)
      .then(({ heading }) => {
        setHeading(heading);
      })
      .then(Api.getAllTasks)
      .then(({ tasks }) => setTasks(tasks));
  };

  const deleteTask = (taskId) => {
    Api.deleteTask(taskId)
      .then(Api.getAllTasks)
      .then(({ tasks }) => setTasks(tasks));
  };

  const HeadingWithDelete = WithDelete(TasksHeading, deleteTasks);
  return (
    <TodoBox>
      <HeadingWithDelete value={heading} changeHeading={changeHeading} />
      <TaskList
        tasks={tasks}
        handleStatus={toggleTaskStatus}
        deleteTask={deleteTask}
      />
      <Input initialValue="" handleValue={saveTask} />
    </TodoBox>
  );
};

export default Todo;
