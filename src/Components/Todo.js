import React, { Component } from "react";
import "./todo.css";
import Input from "./Input";

const Task = (props) => {
  return (
    <li
      className={props.isCompleted ? "complete" : "un-complete"}
      key={props.taskId}
    >
      {props.message}
    </li>
  );
};
const TodoList = (props) => {
  const list = Object.keys(props.tasks).map((taskId, index) => {
    const { message, isCompleted } = props.tasks[taskId];
    return <Task key={taskId} message={message} isCompleted={isCompleted} />;
  });
  return <ul>{list}</ul>;
};

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: {
        0: {
          message: "Buy milk",
          isCompleted: true,
        },
        1: {
          message: "Buy pencil",
          isCompleted: false,
        },
      },
      lastTodoId: 2,
    };
    this.saveTask = this.saveTask.bind(this);
  }

  saveTask(message) {
    const task = { message, isCompleted: false };
    this.setState((prevState) => ({
      tasks: Object.assign(prevState.tasks, { [prevState.lastTodoId]: task }),
      lastTodoId: prevState.lastTodoId + 1,
    }));
  }

  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks} />
        <Input saveTask={this.saveTask} />
      </div>
    );
  }
}

export default Todo;
