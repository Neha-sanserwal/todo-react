import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newVal = event.target.value;
    this.setState((prevState) => ({
      value: newVal,
    }));
  }

  handleKey(event) {
    if (event.charCode === 13 && this.state.value !== "") {
      this.props.handleValue(this.state.value);
      this.setState((prevState) => ({ value: "" }));
    }
  }

  render() {
    return (
      <input
        className={this.props.className}
        value={this.state.value}
        onKeyPress={(event) => this.handleKey(event)}
        onChange={(event) => this.handleChange(event)}
      />
    );
  }
}

export default Input;
