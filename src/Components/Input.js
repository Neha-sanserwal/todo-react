import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, base) {
    const newVal = event.target.value;
    this.setState((prevState) => ({
      value: newVal,
    }));
  }

  handleTask(event) {
    if (event.charCode === 13) {
      this.props.saveTask(this.state.value);
      this.setState((prevState) => ({ value: "" }));
    }
  }
  render() {
    return (
      <input
        value={this.state.value}
        onKeyPress={(event) => this.handleTask(event)}
        onChange={(event) => this.handleChange(event)}
      />
    );
  }
}

export default Input;
