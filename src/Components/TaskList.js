import React, { Component } from "react";
import Task from "./Task";
import { getNextStatus } from "./status";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(taskId) {
    const { tasks } = this.props;
    for (let task of tasks) {
      if (task.taskId === taskId) {
        task.status = getNextStatus(task.status);
      }
    }
    this.props.handleTasks(tasks);
  }

  handleDelete(taskId) {
    const { tasks } = this.props;
    const updatedTask = tasks.filter((task) => {
      if (task.taskId !== taskId) {
        return task;
      }
    });
    // console.log(updatedTask);
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
          handleDelete={this.handleDelete}
        />
      );
    });
    return <div className="tasks">{list}</div>;
  }
}
export default TaskList;
