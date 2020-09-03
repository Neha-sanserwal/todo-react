import React, { Component } from "react";
import Input from "./Input";
import DeleteBtn from "./DeleteBtn";
class TasksHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      isHovering: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ editMode: true }));
  }

  handleMouseHover() {
    this.setState((prevState) => ({
      isHovering: !prevState.isHovering,
    }));
  }

  handleValue(value) {
    this.props.changeHeading(value);
    this.setState((prevState) => ({ editMode: false }));
  }

  render() {
    const { value, onDelete } = this.props;
    let heading = (
      <div
        className="heading"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <h1 onClick={this.handleClick}>{this.props.value}</h1>
        {this.state.isHovering && <DeleteBtn id={0} onClick={onDelete} />}
      </div>
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
    return heading;
  }
}

export default TasksHeading;
