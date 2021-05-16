import React, { useState } from "react";
import logo from "../../images/icon.png";
import minLogo from "../../images/favicon.png";
import styled from "styled-components";
import Link from "../Link";
import { navigate } from "gatsby-link";
import { blush } from "../../utils/colors";

const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background: transparent;
  margin: 0 auto 2%;
  position: fixed;
  left: 10%;
  img{
    width: 10%;
  }
  ${props=>
    props.scroll
    ?
    `
      width: 100%;
      left: 0;
      height: 8vh;
      background: ${blush};
      padding: 1% 0 0 1%;
      img{
        width : 4%;
        transition: 0.3s step(1, start);
        margin-bottom: 0;
      }
      div{
        width: 10%;
      }
    `
    :`
    img {
      width: 25%;
      cursor: pointer;
      transition: 0.3s step(1, start);
      margin-bottom: 0;
    }
    div {
      width: 15%;
    }
    `
  }
  a {
    margin-left: 10%;
    text-decoration: underline;
  }
  @media screen and (max-width: 935px) {
    ${
      props=>
      props.scroll
      ?
      `
      height: 10vh;
      padding: 5%;
      padding-top: 5%;
      align-items: center;
      img {
        width: 10%;
      }
      div {
        width: 35%;
        text-align: right;
      }
      `
      :
      `
      img {
        width: 50%;
      }
      div {
        width: 35%;
        text-align: right;
      }
      `
    }
    
  }
`;

export default function NavBar({isScrolled}) {
  return (
    <HeaderContainer scroll={isScrolled}>
      <img src={isScrolled? minLogo :logo} alt="" onClick={() => navigate("/")} />
      <div>
        <a
          href="https://art.wordwarrior.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          ART
        </a>
        <Link href="/">TECH</Link>
      </div>
    </HeaderContainer>
  );
}
