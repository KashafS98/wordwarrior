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
  .buymeacoffee {
    :hover {
      transform: scale(1.2);
      border: 2px dashed black;
    }
  }
  .twitter {
    :hover {
      -webkit-box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.75);
      svg {
        transform: rotate(-30deg) scale(1.8);
      }
    }
  }
  .insta1 {
    :hover {
      transform: scale(1.2);
      border-radius: 55% 100% 67% 59% / 100% 60% 46% 39%;
    }
  }
  .git {
    :hover {
      animation: ${bounce} 1s;
    }
  }
  .pin {
    :hover {
      animation: ${gelatine} 1s;
    }
  }
  .linkedin {
    :hover {
      border-radius: 0;
      transform: rotate(-10deg) scale(1.2);
    }
  }
  .wa {
    :hover {
      color: #a18288;
      background: black;
      transform: scale(1.2);
    }
  }
  .mail {
    :hover {
      transform: scale(1.2) rotateY(180deg);
    }
  }
`;

const Icon = styled.a`
  color: black;
  background-color: #a18288;
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
  background: linear-gradient(
    135deg,
    rgba(212, 194, 178, 1) 42%,
    rgba(220, 167, 155, 1) 100%
  );
  box-shadow: 10px 10px 20px #b4a597, -10px -10px 20px #f4dfcd;
  color: white;
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
      <Overlay className="overlay" onClick={() => setwidth(!width)}>
        {width ? "x" : "Social"}
      </Overlay>
    </Container>
  );
}
