import React from "react";
import styled from "styled-components";
import { transformStyle } from "../animations";
import { blush, pink, purple } from "../utils/colors";


const StyledButton = styled.button`
  height: 40px;
  padding: 0 5%;
  color: ${blush};
  ${props=>
    props.type==='primary'
    ?
    `background-color: ${purple};
    `
    :
    `
      background: ${pink};
    `
  }
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in;
`;

export default function Button({ onClick, children, type }) {
  return <StyledButton onClick={onClick} type={type}>{children.toUpperCase()}</StyledButton>;
}
