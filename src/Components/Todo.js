import React, { Component } from "react";
import "./todo.css";
import Input from "./Input";
import TaskList from "./TaskList";
import { getDefaultStatus } from "./status";
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
    this.handleTasks = this.handleTasks.bind(this);
    this.changeHeading = this.changeHeading.bind(this);
  }

  createNewTask(message, id) {
    return {
      message,
      status: getDefaultStatus(),
      taskId: id,
    };
  }

  saveTask(message) {
    this.setState((prevState) => {
      const { tasks, lastTodoId } = prevState;
      const task = this.createNewTask(message, lastTodoId);
      return { tasks: [...tasks, task], lastTodoId: lastTodoId + 1 };
    });
  }

  handleTasks(tasks) {
    this.setState((prevState) => ({
      tasks: tasks,
    }));
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
        <TaskList tasks={tasks} handleTasks={this.handleTasks} />
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
