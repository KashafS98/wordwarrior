import React from "react";
import styled from "styled-components";

const DividerStyled = styled.hr`
    border: 1px solid black;
    margin: 5% auto;
    width: 25%;
    @media screen and (max-width: 720px){
        margin: 20% auto;
        width: 50%;
    }
`;

export default function Divider() {
  return <DividerStyled/>;
}
