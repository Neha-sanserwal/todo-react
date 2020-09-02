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
    this.setState((prevState) => ({ editMode: true }));
  }

  handleValue(value) {
    this.props.changeHeading(value);
    this.setState((prevState) => ({ editMode: false }));
  }

  render() {
    const { value } = this.props;
    let heading = (
      <h1 className="heading" onClick={this.handleClick}>
        {this.props.value}
      </h1>
    );
    if (this.state.editMode) {
      heading = (
        <Input
          className="titleInput"
          initialValue={value}
          handleValue={this.handleValue}
        />
      );
    }
    return <div>{heading}</div>;
  }
}

export default TasksHeading;