import React from 'react'
import styled from 'styled-components'

const ExternalLinks = styled.a`
    text-decoration: none;
    color: black;
    :hover {
        transform: rotate(-4deg) scale(1.1);
        font-weight: 500;
        transition: 0.8s;
    }   
`

export default function Link({href,alt,children}) {
    // external Links
    return (
        <ExternalLinks href={href} alt={alt || ''} target='_blank' rel='noopener noreferrer'>{children}</ExternalLinks>
    )
}
