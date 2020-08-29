import React, { Component } from "react";
import "./todo.css";
import Input from "./Input";
import Task from "./Task";

const TodoList = (props) => {
  const { changeStatus, tasks } = props;
  const list = Object.keys(tasks).map((taskId) => {
    const { message, isCompleted } = tasks[taskId];
    return (
      <Task
        key={taskId}
        message={message}
        isCompleted={isCompleted}
        taskId={taskId}
        changeStatus={changeStatus}
      />
    );
  });
  return <div className="tasks">{list}</div>;
};

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: {},
      lastTodoId: 0,
    };
    this.saveTask = this.saveTask.bind(this);
    this.changeTask = this.changeTask.bind(this);
  }

  saveTask(message) {
    const task = { message, isCompleted: false };
    this.setState((prevState) => ({
      tasks: Object.assign(prevState.tasks, { [prevState.lastTodoId]: task }),
      lastTodoId: prevState.lastTodoId + 1,
    }));
  }

  changeTask(task, taskId) {
    this.setState((prevState) => ({
      tasks: Object.assign(prevState.tasks, { [taskId]: task }),
    }));
  }

  render() {
    return (
      <div className="todo">
        <h1>Todo</h1>
        <TodoList tasks={this.state.tasks} changeStatus={this.changeTask} />
        <Input saveTask={this.saveTask} />
      </div>
    );
  }
}

export default Todo;
