import React, { Component } from "react";
const DeleteBtn = (props) => {
  const { id, onClick } = props;
  return (
    <div className="delete-btn" onClick={() => onClick(id)}>
      {" "}
      X{" "}
    </div>
  );
};
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
          <DeleteBtn id={taskId} onClick={deleteTask} />
        )}
      </div>
    );
  }
}
export default Task;
