import React from "react";
import styled from "styled-components";
const COLORS = {
  due: "lightblue",
  processing: "orange",
  completed: "seagreen",
};
const Indicator = styled.span`
  height: 30px;
  margin-left: 1rem;
  width: 20px;
  margin-right: 1rem;
  background: ${(props) => COLORS[props.color]};
`;

const Task = (props) => {
  const { status, message, id, toggleStatus } = props;
  return (
    <div className={`task ${status}`} onClick={toggleStatus}>
      <Indicator color={status}></Indicator>
      <div className="message" key={id}>
        {message}
      </div>
    </div>
  );
};
export default Task;
