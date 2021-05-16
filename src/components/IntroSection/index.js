import React, { useState } from "react";
import {
  Container,
  ImageContainer,
  TextContainer,
  ButtonWrapper,
} from "./IntroSection.styled";
import me from "../../images/warrior.png";
import Button from "../Button";
import Image from "../Image";
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
          I am a Full Stack Developer (tilting towards Front-end), cat person,
          coffee, pasta, donuts fanatic (sweet tooth for almost all desert with
          icing), in love with classic novels, fantasy, and murder mystery
          forever. Literature, Psychology, Music and Cinema enthusiast. Anxious
          all the time, yet an extrovert with a zest for travel, adventure,
          mountains, lakes, rivers and parties, dresses, and games!
        </p>
        <ButtonWrapper>
          <Button
            onClick={() =>
              {
                if(document){
                  document.getElementById('main').scrollTo({
                    top: 800,
                    behavior: "smooth",
                  })
                }
              }
            }
            type="primary"
          >
            Tell me more
          </Button>
          <Button onClick={() => navigate("/contact")} type="secondary">
            Tinkle on the bower
          </Button>
        </ButtonWrapper>
      </TextContainer>
    </Container>
  );
}
