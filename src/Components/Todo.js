import React, { useState } from "react";
import "./todo.css";
import Input from "./Input";
import TaskList from "./TaskList";
import { getDefaultStatus, getNextStatus } from "../status";
import TasksHeading from "./TasksHeading";
import WithDelete from "./WithDelete";
import { useEffect } from "react";
import * as Api from "../Api";
const Todo = (props) => {
  const [heading, setHeading] = useState("");
  const [tasks, setTasks] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

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
    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== taskId));
  };

  const HeadingWithDelete = WithDelete(TasksHeading, deleteTasks);
  return (
    <div className="todo">
      <HeadingWithDelete value={heading} changeHeading={changeHeading} />
      <TaskList
        tasks={tasks}
        handleStatus={toggleTaskStatus}
        deleteTask={deleteTask}
      />
      <Input className="taskInput" initialValue="" handleValue={saveTask} />
    </div>
  );
};

export default Todo;
