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
`

export default function PageLayout(props) {
    return (
        <Container>
            <NavBar/>
            {props.children}
        </Container>
    )
}
