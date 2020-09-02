import React, { Component } from "react";
import "./todo.css";
import Input from "./Input";
import TaskList from "./TaskList";
import { getDefaultStatus, getNextStatus } from "./status";
import TasksHeading from "./TasksHeading";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Todo",
      tasks: [],
      lastTodoId: 0,
    };
    this.saveTask = this.saveTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.changeHeading = this.changeHeading.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  createNewTask(message, id) {
    return {
      message,
      status: getDefaultStatus(),
      taskId: id,
    };
  }

  saveTask(message) {
    this.setState(({ tasks, lastTodoId }) => {
      const task = this.createNewTask(message, lastTodoId);
      return { tasks: [...tasks, task], lastTodoId: lastTodoId + 1 };
    });
  }

  toggleTaskStatus(taskId) {
    this.setState(({ tasks }) => {
      const tasksCopy = tasks.map((task) => ({ ...task })); // Deep cloning the tasks
      const taskToUpdate = tasksCopy.find((task) => task.taskId === taskId); // finding task to toggle
      taskToUpdate.status = getNextStatus(taskToUpdate.status); // get next status
      return { tasks: tasksCopy }; // update the state
    });
  }

  deleteTask(taskId) {
    this.setState(({ tasks }) => {
      const tasksCopy = tasks.map((task) => ({ ...task })); // Deep cloning
      const updatedTasks = tasksCopy.filter((task) => task.taskId !== taskId); // filtering tasks to not delete
      return { tasks: updatedTasks }; // updating tasks
    });
  }

  changeHeading(value) {
    this.setState((prevState) => ({
      heading: value,
    }));
  }

  render() {
    const { heading, tasks } = this.state;
    return (
      <div className="todo">
        <TasksHeading value={heading} changeHeading={this.changeHeading} />
        <TaskList
          tasks={tasks}
          handleStatus={this.toggleTaskStatus}
          deleteTask={this.deleteTask}
        />
        <Input
          className="taskInput"
          initialValue=""
          handleValue={this.saveTask}
        />
      </div>
    );
  }
}

export default Todo;