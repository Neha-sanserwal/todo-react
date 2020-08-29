import React, { Component } from "react";

const TodoList = (props) => {
  const list = Object.keys(props.tasks).map((taskId, index) => {
    const { message } = props.tasks[taskId];
    return <li key={taskId}>{message}</li>;
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
