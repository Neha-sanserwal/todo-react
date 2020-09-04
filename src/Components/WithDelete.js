import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
export default function (ComponentToAdd, onDelete) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHovering: false,
      };
      this.handleMouseHover = this.handleMouseHover.bind(this);
    }
    handleMouseHover() {
      this.setState((prevState) => ({
        isHovering: !prevState.isHovering,
      }));
    }

    render() {
      return (
        <div
          className="heading"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <ComponentToAdd {...this.props} />
          {this.state.isHovering && <DeleteBtn id={0} onClick={onDelete} />}
        </div>
      );
    }
  };
}
