import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin: 8% auto;
    @media screen and (min-width: 1325px){
        width: 70%;
    }
    @media screen and (min-width: 1200px){
        width: 90%;
    }
    @media screen and (max-width: 935px){
        flex-direction: column;
    }
    @media screen and (max-width: 500px){
        flex-direction: column;
    }
    
`

export const ImageContainer = styled.div`
    width: 50%;
    text-align: right;
    padding: 0 5%;
    img {
        width: 70%;
    }
    @media screen and (max-width: 935px){
        width: 50%;
        margin: 0 auto;
        text-align: center;
    }
    @media screen and (max-width: 500px){
        width: 100%;
        text-align: center;
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
        width: 100%;
        margin: 0;
        margin-bottom: 2%;
        font-size: 56px;
        text-align: left;
    }
    p{
        width: 80%;
        font-size: 20px;
    }
    @media screen and (min-width: 721px) and (max-width: 935px){
        width: 80%;
        margin: 0 auto;
        text-align: center;
        p{
            width: 100%;
        }
        h2{
            text-align: center;
        }
    }
    @media screen and (max-width: 720px){
        width: 80%;
        margin: 0 auto;
        text-align: center;
        p{
            width: 100%;
        }
        h2{
            text-align: center;
        }
    }
    @media screen and (max-width: 500px){
        width: 90%;
        margin: 30px auto;
        text-align: center;
        p{
            width: 100%
        }
        h2{
            text-align: center;
        }
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    button{
        margin-right: 2%;
    }
    @media screen and (min-width: 721px) and (max-width: 935px){
        width: 60%;
    }
    @media screen and (max-width: 935px){
        flex-direction: column;
        button {
            margin-bottom: 2%;
        }
    }
`