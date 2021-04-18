import React from "react";
import styled from "styled-components";
import { transformStyle } from "../animations";


const StyledButton = styled.button`
  height: 40px;
  padding: 2% 5%;
  ${props=>
    props.type==='primary'
    ?
    `background-color: black;
    color: white;
    border: none;
    :hover {
      background-color: #A18288;
      color: black;
      ${transformStyle}
      -webkit-box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
      -moz-box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
      box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
    }
    `
    :
    `
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
      border: 3px solid black;
      background: transparent;
      color: black;
      :hover {
        border: none;
        color: white;
        background: #A18288;
        ${transformStyle}
        -webkit-box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
        -moz-box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
        box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
      }
    `
  }
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in;
`;

export default function Button({ onClick, children, type }) {
  return <StyledButton onClick={onClick} type={type}>{children}</StyledButton>;
}
