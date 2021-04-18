import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
    transition: 0.3s ease-in;
    :hover {
        transform: rotate(-8deg) scale(1.1)
    }
`

export default function Image({src, alt}) {
    return (
        <StyledImage src={src} alt={alt}/>
    )
}
