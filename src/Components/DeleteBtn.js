import React from "react";
import styled from "styled-components";
export default (props) => {
  const { id, onClick } = props;
  const DltBtn = styled.div`
    display: flex;
    cursor: pointer;
    font-weight: 800;
    color: gray;
    align-items: center;
    font-size: 1.2rem;
  `;
  return <DltBtn onClick={() => onClick(id)}>X</DltBtn>;
};
