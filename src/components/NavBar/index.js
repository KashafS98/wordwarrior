import React from 'react'
import logo from '../../images/icon.png'
import styled from 'styled-components'
import Link from '../Link'

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
    background: transparent;
    padding: 2% 0;
`

export default function NavBar() {
    return (
        <HeaderContainer>
            <Link href="https://art.wordwarrior.in">ART</Link>
            <img src={logo} width='8%' alt=''/>
            <Link href="https://dev.wordwarrior.in">TECH</Link>
        </HeaderContainer>
    )
}
