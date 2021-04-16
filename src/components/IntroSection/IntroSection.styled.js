import styled from 'styled-components'

export const Container = styled.div`
    width: 70%;
    display: flex;
    margin: 8% auto;
`

export const ImageContainer = styled.div`
    width: 50%;
    text-align: right;
    padding: 0 5%;
    img {
        width: 70%;
    }
`

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: left;
    h2{
        text-align: left;
        margin: 0;
        font-size: 56px;
    }
    p{
        width: 70%;
        font-size: 20px;
    }
`