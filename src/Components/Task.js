import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState((prevState) => ({ isHovering: !prevState.isHovering }));
  }

  render() {
    const { status, message, taskId, toggleStatus, deleteTask } = this.props;
    return (
      <div
        className="task-box"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <div className={`task ${status}`} onClick={() => toggleStatus(taskId)}>
          <div className="indicator"></div>
          <div className="message" key={taskId}>
            {message}
          </div>
        </div>
        {this.state.isHovering && (
          <div className="delete-btn" onClick={() => deleteTask(taskId)}>
            X
          </div>
        )}
      </div>
    );
  }
}
export default Task;
