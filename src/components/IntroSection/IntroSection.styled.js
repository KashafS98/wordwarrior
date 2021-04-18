import styled from 'styled-components'

export const Container = styled.div`
    width: 70%;
    display: flex;
    margin: 8% auto;
    @media screen and (max-width: 720px){
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    width: 50%;
    text-align: right;
    padding: 0 5%;
    img {
        left: 20px;
        top: 20px;
        position: absolute;
        width: 100%;
    }
    div {
        width: 70%;
        height: 100%;
        position: relative;
        border: 1px solid black;
        transition: 0.3s ease-in;
        :hover {
            transform: rotate(5deg) scale(1.1);
        }
    }
    @media screen and (max-width: 720px){
        width: 100%;
        div{
            width: 90%;
            height: 300px
        }
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
    @media screen and (max-width: 720px){
        width: 100%;
        margin-top: 30px;
        p{
            width: 100%
        }
    }
`