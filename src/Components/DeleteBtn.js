import React from "react";
import styled from "styled-components";
const DltBtn = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: 800;
  color: gray;
  align-items: center;
  font-size: 1.2rem;
`;
export default (props) => {
  const { id, onClick } = props;

  return <DltBtn onClick={() => onClick(id)}>X</DltBtn>;
};
