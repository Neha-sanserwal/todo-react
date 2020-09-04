import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
export default function (ComponentToAdd, onDelete) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHovering: false,
      };
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseEnter() {
      this.setState((prevState) => ({
        isHovering: true,
      }));
    }
    handleMouseLeave() {
      this.setState((prevState) => ({
        isHovering: false,
      }));
    }

    handleClick(id) {
      onDelete(id);
    }

    render() {
      return (
        <div
          className="heading"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <ComponentToAdd {...this.props} />
          {this.state.isHovering && (
            <DeleteBtn onClick={() => this.handleClick(this.props.id)} />
          )}
        </div>
      );
    }
  };
}
