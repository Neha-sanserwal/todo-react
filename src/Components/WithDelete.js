import React, { useState } from "react";
import styled from "styled-components";
import DeleteBtn from "./DeleteBtn";

const Box = styled.div`
  display: flex;
  width: 60%;
  align-content: center;
  justify-content: space-between;
`;

export default function (ComponentToAdd, onDelete) {
  return (props) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
      <Box
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <ComponentToAdd {...props} />
        {isHovering && <DeleteBtn onClick={() => onDelete(props.id)} />}
      </Box>
    );
  };
}
