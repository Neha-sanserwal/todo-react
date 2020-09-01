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
      title: "All TODO",
      tasks: [],
      lastTodoId: 0,
    };
    this.saveTask = this.saveTask.bind(this);
    this.handleTask = this.handleTask.bind(this);
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
      const prevTasks = tasks.slice();
      prevTasks.push(task);
      return { tasks: prevTasks, lastTodoId: lastTodoId + 1 };
    });
  }

  handleTask(tasks) {
    this.setState((prevState) => ({
      tasks: tasks,
    }));
  }

  changeHeading(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="todo">
        <TasksHeading
          value={this.state.title}
          handleValue={this.changeHeading}
        />
        <TaskList tasks={this.state.tasks} handleTask={this.handleTask} />
        <Input initialValue="" handleValue={this.saveTask} />
      </div>
    );
  }
}

export default Todo;
