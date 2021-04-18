import React from 'react'
import styled from 'styled-components'
import { transformStyle } from '../animations'

const ExternalLinks = styled.a`
    text-decoration: none;
    color: black;
    transition: 0.3s ease-in;
    width: 5%;
    text-align: center;
    :hover {
        text-decoration: underline;
    }   
`

export default function Link({href,alt,children}) {
    // external Links
    return (
        <ExternalLinks href={href} alt={alt || ''} target='_blank' rel='noopener noreferrer'>{children}</ExternalLinks>
    )
}
