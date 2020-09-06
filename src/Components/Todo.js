import React, { useState } from "react";
import "./todo.css";
import Input from "./Input";
import TaskList from "./TaskList";
import { getDefaultStatus, getNextStatus } from "./status";
import TasksHeading from "./TasksHeading";
import WithDelete from "./WithDelete";

const Todo = (props) => {
  const [heading, setHeading] = useState(props.heading);
  const [tasks, setTasks] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const saveTask = (message) => {
    setTasks((tasks) => {
      const status = getDefaultStatus();
      return [...tasks, { message, status, taskId: lastTodoId }];
    });
    setLastTodoId((lastTodoId) => lastTodoId + 1);
  }; // saves task in state

  const toggleTaskStatus = (taskId) => {
    setTasks((tasks) => {
      const tasksCopy = tasks.map((task) => ({ ...task })); // clone
      const taskToUpdate = tasksCopy.find((task) => task.taskId === taskId); // finding task to toggle
      taskToUpdate.status = getNextStatus(taskToUpdate.status); // get next status
      return tasksCopy; // update the state
    });
  };

  const changeHeading = (value) => {
    setHeading(value);
  };

  const deleteTasks = () => {
    setTasks([]);
    setLastTodoId(0);
    setHeading(props.heading);
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
