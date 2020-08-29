import React, { Component } from "react";
import "./todo.css";
const Task = (props) => {
  return (
    <li className="completed" key={props.taskId}>
      {props.message}
    </li>
  );
};
const TodoList = (props) => {
  const list = Object.keys(props.tasks).map((taskId, index) => {
    const { message } = props.tasks[taskId];
    return <Task key={taskId} message={message} />;
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
          isCompleted: false,
        },
        1: {
          message: "Buy pencil",
          isCompleted: false,
        },
        2: {
          message: "Post letter",
          isCompleted: false,
        },
      },
      lastTodoId: 2,
    };
  }
  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Todo;
