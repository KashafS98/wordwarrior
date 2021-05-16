import React from "react";
import styled from "styled-components";
import { transformStyle } from "../animations";
import { blush, pink, purple, roseRed } from "../utils/colors";

const StyledButton = styled.button`
  height: 40px;
  padding: 0 5%;
  color: ${blush};
  border: none;
  ${(props) =>
    props.type === "primary"
      ? `background-color: ${purple};`
      : 
      props.type === "primaryOutlined"
      ? `background-color: ${blush};
      border: 2px solid ${roseRed};
      color: ${roseRed};
      :hover {
        background-color: ${roseRed};
        color: ${blush};
      }`
      : `
      background: ${pink};`
    }
  border-radius: 4px;
  outline: none;
  transition: 0.3s ease-in;
`;

export default function Button({ onClick, children, type }) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children.toUpperCase()}
    </StyledButton>
  );
}
