import React from 'react'
import logo from '../../images/icon.png'
import styled from 'styled-components'
import Link from '../Link'
import { spin } from '../../animations'
import { navigate } from 'gatsby-link'

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
    background: transparent;
    padding: 2% 0;
    img {
        width: 8%;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        :hover{
            animation: ${spin} 0.8s;
        }
    }
    @media screen and (max-width: 720px){
        img {
            width: 25%;
        }
    }
`

export default function NavBar() {
    return (
        <HeaderContainer>
            <Link href="https://art.wordwarrior.in">ART</Link>
            <img src={logo} alt='' onClick={()=>navigate('/')}/>
            <Link href="https://dev.wordwarrior.in">TECH</Link>
        </HeaderContainer>
    )
}
