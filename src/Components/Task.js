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

const Message = styled.div`
  font-size: 1.2rem;
  width: 80%;
  text-decoration: ${(props) =>
    props.status === "completed" ? "line-through" : "none"};
`;

const TaskBox = styled.div`
  display: flex;
  font-weight: 900;
  cursor: pointer;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1rem 0 1rem 0;
  width: 90%;
`;

const Task = (props) => {
  const { status, message, id, toggleStatus } = props;
  return (
    <TaskBox onClick={toggleStatus}>
      <Indicator color={status}></Indicator>
      <Message status={status} key={id}>
        {message}
      </Message>
    </TaskBox>
  );
};
export default Task;
