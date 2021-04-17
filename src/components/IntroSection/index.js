import React, { useState } from "react";
import {
  Container,
  ImageContainer,
  TextContainer,
} from "./IntroSection.styled";
import me from "../../images/me.png";
import Button from "../Button";
import Image from "../Image";
import SVG from "../SVG";
import { navigate } from "gatsby-link";

export default function IntroSection() {
  return (
    <Container>
      <ImageContainer>
        <div>
          <Image src={me} alt="hello" />
        </div>
      </ImageContainer>
      <TextContainer>
        <h2>Hello Warriors!</h2>
        <p>
          I am a{" "}
          <u>
            Full Stack Developer
            <span class="tooltiptext">
              2 years of coding in ReactJS, getting excited about UI/UX,
              fighting for front-end
            </span>
          </u>{" "}
          (tilting towards Front-end),
          <u>
            cat person<span class="tooltiptext">I do not like DOGS</span>
          </u>
          , in love with{" "}
          <u>
            fantasy and murder mystery
            <span class="tooltiptext">
              harry potter, dan brown, nora roberts, agatha christie and so many
              more
            </span>
          </u>{" "}
          forever. {" "}
          <u>
            Literature, Psychology,{" "}
            <span class="tooltiptext">
              I'm gonna do a PhD in Literature and psychology some day
            </span>
            </u>{" "}
          Music and Cinema enthusiast. {" "}
          <u>
            Anxious
            <span class="tooltiptext">
              I take therapy, proudly! I struggle with an anxiety disorder of
              some sort. But I believe I am very strong, and my wobbly
              confidence helps me get through all mental obstacles.
            </span>
          </u>{" "}
          all the time, yet an{" "}
          <u>
            extrovert
            <span class="tooltiptext">
              I love making new friends, vibing with people, and socializing.
              I'm a people person, even though I find it hard to avigate through
              complex human behaviours.
            </span>
          </u>{" "}
          with a zest for
          <u>
            travel{" "}
            <span class="tooltiptext">
              Treks, drives, train rides even. I have climbed the highest
              mountain peak (5,400ft) of our state.
            </span>
          </u>
          , mountains, lakes, rivers and{" "}
          <u>
            parties
            <span class="tooltiptext">
              I love the lights, the music, the dancing, the happy faces and
              mingling!!
            </span>
          </u>
          , dresses, and games!
        </p>
        <Button onClick={()=>navigate('/contact')}>Contact</Button>
      </TextContainer>
    </Container>
  );
}