import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  SiBuymeacoffee,
  SiInstagram,
  SiTwitter,
  SiGithub,
  SiPinterest,
  SiLinkedin,
  SiWhatsapp,
  SiGmail,
} from "react-icons/si";
import { bounce, gelatine, spin } from "../animations";
import { roseRed } from "../utils/colors";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 5%;
  transition: 0.8s ease-in-out;
  ${(props) =>
    props.width
      ? css`
          width: 48%;
          @media screen and (max-width: 720px){
            width: 90%;
          }
          .overlay {
            width: 20px;
            height: 20px;
            left: 100%;
            bottom: 100%;
            box-shadow: none;
          }
          div {
            animation: ${spin} 0.8s 0.5s;
          }
        `
      : `width: 2%;`}
  position: relative;
`;

const Icon = styled.a`
background: #EDE8EA;
box-shadow:  5px 5px 10px #d1ccce,
             -5px -5px 10px #ffffff;
  color: ${roseRed};
  border-radius: 50%;
  width: 60px;
  aspect-ratio: 1/1;
  min-width: 2px;
  min-height: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 2%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: 0.5s ease-in-out;
  svg {
    transition: 0.2s ease-out;
  }
  :hover {
    background: #EDE8EA;
box-shadow: inset 5px 5px 10px #d1ccce,
            inset -5px -5px 10px #ffffff;
  }
  @media screen and (max-width: 720px){
    width: 40%;
    aspect-ratio: 1/1;
    margin: 1%;
  }
`;

const Overlay = styled.div`
  width: 100px;
  height: 100px;
  left: -120%;
  bottom: -1800%;
  border-radius: 50%;
  background: #EDE8EA;
box-shadow:  5px 5px 15px #d8d3d5,
             -5px -5px 15px #fffdff;
  color: ${roseRed};
  border: #a18288;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  @media screen and (max-width: 720px){
    left: -500%;
    bottom: -40px;
  }`;

export default function SocialButtons() {
  const [width, setwidth] = useState(false);
  return (
    <Container width={width}>
      <Icon
        className="buymeacoffee"
        href="https://www.buymeacoffee.com/wordwarrior"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiBuymeacoffee size="25px" />
      </Icon>
      <Icon
        className="insta1"
        href="https://www.instagram.com/shedev.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram size="25px" />
      </Icon>
      <Icon
        className="twitter"
        href="https://twitter.com/wordwarrior_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiTwitter size="25px" />
      </Icon>
      <Icon
        className="git"
        href="https://github.com/KashafS98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub size="25px" />
      </Icon>
      <Icon
        className="pin"
        href="https://in.pinterest.com/kashafalways/painting/my-paintings/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiPinterest size="25px" />
      </Icon>
      <Icon
        className="linkedin"
        href="https://www.linkedin.com/in/kashafs98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin size="25px" />
      </Icon>
      <Icon
        className="wa"
        href="https://wa.me/9867467973"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiWhatsapp size="25px" />
      </Icon>
      <Icon
        className="mail"
        href="mailto: kashaf.tshaikh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail size="25px" />
      </Icon>
      <Overlay className="overlay" onClick={() => setwidth(!width)}>
        {width ? "x" : "Social"}
      </Overlay>
    </Container>
  );
}
