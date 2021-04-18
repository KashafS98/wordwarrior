import React from 'react'
import NavBar from '../../components/NavBar'
import './pages.css'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Container = styled.section`
    min-height: 100vh;
    max-heght: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background-image: url('https://media-public.canva.com/MADGyKvzrRM/4/screen_2x.jpg')
`

export default function PageLayout(props) {
    return (
        <Container>
            <NavBar/>
            {props.children}
        </Container>
    )
}
