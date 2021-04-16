import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  color: white;
  height: 40px;
  padding: 2% 5%;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    -webkit-box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
    -moz-box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
    box-shadow: 4px 6px 13px -3px rgba(64, 64, 64, 0.7);
    transition: 0.8s;
  }
`;

export default function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
