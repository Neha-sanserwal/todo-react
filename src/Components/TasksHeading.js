import React, { Component } from "react";
import Input from "./Input";

class TasksHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
  }

  handleValue(value) {
    this.props.changeHeading(value);
    this.handleClick();
  }

  render() {
    const { value } = this.props;
    let heading = <h1 onClick={this.handleClick}>{this.props.value}</h1>;
    if (this.state.editMode) {
      heading = (
        <Input
          className="titleInput"
          initialValue={value}
          handleValue={this.handleValue}
        />
      );
    }
    return heading;
  }
}

export default TasksHeading;
