import React, { Component } from "react";
import Task from "./Task";

const changeStatus = (status) => {
  const { inProcess, isCompleted } = status;
  if (inProcess) {
    return { inProcess: !inProcess, isCompleted: !isCompleted };
  }
  if (isCompleted) {
    return { inProcess, isCompleted: !isCompleted };
  }
  return { inProcess: !inProcess, isCompleted };
};

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(taskId) {
    const { tasks } = this.props;
    for (let task of tasks) {
      if (task.taskId === taskId) {
        task.status = changeStatus(task.status);
      }
    }
    this.props.handleTask(tasks);
  }
  render() {
    const { tasks } = this.props;
    const list = tasks.map((task, index) => {
      const { message, status, taskId } = task;
      return (
        <Task
          key={index}
          message={message}
          status={status}
          taskId={taskId}
          handleClick={this.handleClick}
        />
      );
    });
    return <div className="tasks">{list}</div>;
  }
}
export default TaskList;
