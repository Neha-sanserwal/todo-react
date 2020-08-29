import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isCompleted, message, taskId } = this.props;
    const updatedTask = { isCompleted: !isCompleted, message };
    this.props.changeStatus(updatedTask, taskId);
  }

  render() {
    const { isCompleted, message, taskId } = this.props;
    const className = isCompleted ? "complete" : "un-complete";
    return (
      <div className={`task  ${className}`} onClick={this.handleClick}>
        <div className="indicator"></div>
        <div className="message" key={taskId}>
          {message}
        </div>
      </div>
    );
  }
}
export default Task;
