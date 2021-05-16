import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import './pages.css'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import contactIcon from '../../images/contact.png'
import { navigate } from 'gatsby-link'
import bg from '../../images/bg.png'

const Container = styled.section`
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background: url('${bg}') center/cover no-repeat fixed;
`

export default function PageLayout(props) {
    const [isScrolled, setisScrolled] = useState(false)

    const handleScroll = e => {
        e.target.scrollTop > 100 ? setisScrolled(true) : setisScrolled(false)
    }

    return (
        <Container onScroll={handleScroll} id='main'>
            <NavBar isScrolled={isScrolled}/>
            {props.children}
            <img src={contactIcon} alt="TInkle the Bower" className='contact-icon' onClick={()=>{navigate('/contact')}}/>
        </Container>
    )
}
