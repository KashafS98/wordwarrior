import React from 'react'
import logo from '../../images/icon.png'
import styled from 'styled-components'
import Link from '../Link'
import { spin, transformStyle } from '../../animations'
import { navigate } from 'gatsby-link'

const HeaderContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    background: transparent;
    margin: 2% auto;
    img {
        width: 25%;
        cursor: pointer;
        transition: 0.3s ease-in;
        margin-bottom: 0
    }
    div{
        width: 15%;
    }
    a{
        margin-left: 10%;
        text-decoration: underline;
    }
    @media screen and (max-width: 935px){
        img {
            width: 50%;
        }
        div {
            width: 35%;
            text-align: right;
        }
    }
`

export default function NavBar() {
    return (
        <HeaderContainer>
            <img src={logo} alt='' onClick={()=>navigate('/')}/>
            <div>
                <Link href="/">ART</Link>
                <Link href="/">TECH</Link>
            </div>
        </HeaderContainer>
    )
}
