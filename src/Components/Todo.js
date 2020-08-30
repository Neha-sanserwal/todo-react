import React, { Component } from "react";
import "./todo.css";
import Input from "./Input";
import TaskList from "./TaskList";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      lastTodoId: 0,
    };
    this.saveTask = this.saveTask.bind(this);
    this.handleTask = this.handleTask.bind(this);
  }

  saveTask(message) {
    this.setState((prevState) => {
      const task = {
        message,
        isCompleted: false,
        taskId: prevState.lastTodoId,
      };
      const prevTasks = prevState.tasks.slice();
      prevTasks.push(task);
      return { tasks: prevTasks, lastTodoId: prevState.lastTodoId + 1 };
    });
  }

  handleTask(tasks) {
    this.setState((prevState) => ({
      tasks: tasks,
    }));
  }

  render() {
    return (
      <div className="todo">
        <h1>Todo</h1>
        <TaskList tasks={this.state.tasks} handleTask={this.handleTask} />
        <Input saveTask={this.saveTask} />
      </div>
    );
  }
}

export default Todo;
