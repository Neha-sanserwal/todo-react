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

  createNewTask(message, id) {
    return {
      message,
      status: { inProcess: false, isCompleted: false },
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
