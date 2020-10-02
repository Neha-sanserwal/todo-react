import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 1rem 0 1rem 0;
  padding: 0.5rem;
  height: 4rem;
  font-size: ${(props) => (props.hasBoldText ? "2rem" : "1.2rem")};
  width: 60%;
  font-weight: ${(props) => (props.hasBoldText ? 900 : 400)};
  box-sizing: border-box;
`;

const Input = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const handleChange = (event) => {
    const newVal = event.target.value;
    setValue(newVal);
  };

  const handleKey = (event) => {
    if (event.charCode === 13 && value !== "") {
      props.handleValue(value);
      setValue("");
    }
  };

  return (
    <StyledInput
      hasBoldText={props.hasBoldText}
      value={value}
      onKeyPress={(event) => handleKey(event)}
      onChange={(event) => handleChange(event)}
    />
  );
};
export default Input;
