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
import { blush, roseRed } from "../utils/colors";
import Button from "./Button";

const Container = styled.div`
  ${(props) =>
    props.socialModal
      ? `
    display: flex;
      `
      : `display: none;`}
  background: ${blush};
  text-align: center;
  justify-content: center;
  align-items: space-evenly;
  flex-wrap: wrap;
  padding: 5%;
  border: 2px solid black;
  -webkit-box-shadow: 0px 15px 13px -8px rgb(0 0 0 / 57%);
    -moz-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    box-shadow: 0px 15px 13px -8px rgb(0 0 0 / 57%);
  width: 70%;
  margin: 0 auto;
  transition: 0.8s ease-in-out;

  position: absolute;
  top: 20%;
  left: 20%;

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 3%;
      box-shadow: inset 5px 5px 31px #d5d1d3,
            inset -5px -5px 31px #ffffff;
  border-radius: 16px;
    }

`;

const Icon = styled.a`
  background: #ede8ea;
  box-shadow: 5px 5px 10px #d1ccce, -5px -5px 10px #ffffff;
  color: ${roseRed};
  border-radius: 50%;
  width: 80px;
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
    background: #ede8ea;
    box-shadow: inset 5px 5px 10px #d1ccce, inset -5px -5px 10px #ffffff;
  }
  @media screen and (max-width: 720px) {
    width: 40%;
    aspect-ratio: 1/1;
    margin: 1%;
  }
`;

const Overlay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2%;
`;

export default function SocialButtons() {
  const [socialModal, setsocialModal] = useState(false);
  return (
    <>
      <Container socialModal={socialModal}>
      <h3>Here is some random neumorphism!</h3>
        <h2>X</h2>
        <div>
        <Icon
          className="buymeacoffee"
          href="https://www.buymeacoffee.com/wordwarrior"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBuymeacoffee size="30px" />
        </Icon>
        <Icon
          className="insta1"
          href="https://www.instagram.com/shedev.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram size="30px" />
        </Icon>
        <Icon
          className="twitter"
          href="https://twitter.com/wordwarrior_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTwitter size="30px" />
        </Icon>
        <Icon
          className="git"
          href="https://github.com/KashafS98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size="30px" />
        </Icon>
        <Icon
          className="pin"
          href="https://in.pinterest.com/kashafalways/painting/my-paintings/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPinterest size="30px" />
        </Icon>
        <Icon
          className="linkedin"
          href="https://www.linkedin.com/in/kashafs98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin size="30px" />
        </Icon>
        <Icon
          className="wa"
          href="https://wa.me/9867467973"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiWhatsapp size="30px" />
        </Icon>
        <Icon
          className="mail"
          href="mailto: kashaf.tshaikh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail size="30px" />
        </Icon>
        </div>
      </Container>
      <Overlay onClick={() => setsocialModal(!socialModal)}>
        <Button type="secondary">Socialize</Button>
      </Overlay>
    </>
  );
}
