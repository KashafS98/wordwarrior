import React from 'react'
import { Container, ImageContainer, TextContainer } from './IntroSection.styled'
import me from '../../images/me.png'
import Button from '../Button'

export default function IntroSection() {
    return (
        <Container>
            <ImageContainer>
                <img src={me} alt=''/>
            </ImageContainer>
            <TextContainer>
                <h2>Hello kittens!</h2>
                <p>Lorem ipsum dolor sit amet, dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt.</p>
                <Button>Contact</Button>
            </TextContainer>
        </Container>
    )
}
