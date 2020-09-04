import React, { Component } from "react";
import "./todo.css";
import Input from "./Input";
import TaskList from "./TaskList";
import { getDefaultStatus, getNextStatus } from "./status";
import TasksHeading from "./TasksHeading";
import WithDelete from "./WithDelete";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: this.props.heading,
      tasks: [],
      lastTodoId: 0,
    };
    this.saveTask = this.saveTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.changeHeading = this.changeHeading.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
  }

  createNewTask(message, id) {
    return {
      message,
      status: getDefaultStatus(),
      taskId: id,
    };
  } // gives a task object

  saveTask(message) {
    this.setState(({ tasks, lastTodoId }) => {
      const task = this.createNewTask(message, lastTodoId);
      return { tasks: [...tasks, task], lastTodoId: lastTodoId + 1 };
    });
  } // saves task in state

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

  deleteTasks() {
    this.setState((prevState) => ({
      tasks: [],
      heading: this.props.heading,
    }));
  }

  render() {
    const { heading, tasks } = this.state;
    const HeadingWithDelete = WithDelete(TasksHeading, this.deleteTasks);
    return (
      <div className="todo">
        <HeadingWithDelete value={heading} changeHeading={this.changeHeading} />
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
