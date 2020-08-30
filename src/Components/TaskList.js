import React, { Component } from "react";
import Task from "./Task";

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
        task.isCompleted = !task.isCompleted;
      }
    }
    this.props.handleTask(tasks);
  }
  render() {
    const { tasks } = this.props;
    const list = tasks.map((task, index) => {
      const { message, isCompleted, taskId } = task;
      return (
        <Task
          key={index}
          message={message}
          isCompleted={isCompleted}
          taskId={taskId}
          handleClick={this.handleClick}
        />
      );
    });
    return <div className="tasks">{list}</div>;
  }
}
export default TaskList;
