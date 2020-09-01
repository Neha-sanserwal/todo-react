import React, { Component } from "react";
import Input from "./Input";

class TasksHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
  }
  render() {
    const { value, handleValue } = this.props;
    let heading = <h1 onClick={this.handleClick}>{this.props.value}</h1>;
    if (this.state.editMode) {
      heading = <Input initialValue={value} handleValue={handleValue} />;
    }
    return heading;
  }
}

export default TasksHeading;
