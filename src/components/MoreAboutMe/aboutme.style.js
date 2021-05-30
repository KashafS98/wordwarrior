import styled from 'styled-components'
import { blush, roseRed } from '../../utils/colors'

export const Container = styled.div`
    margin: 20% auto;
    width: 70%;
    h3{
        font-weight: 400;
    }
    @media screen and (max-width: 1200px){
        width: 90%;
        margin: 15% auto;
    }
    @media screen and (max-width: 935px){
        margin: 25% auto;
        h1{
            font-size: 40px;
        }
    }
    @media screen and (max-width: 500px){
        margin: 30% auto;
        h1{
            font-size: 40px;
        }
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin-bottom: 6px;
    }
`

export const Item = styled.div`
    cursor: pointer;
`

export const ContentHolder = styled.div`
    background: ${blush};
    -webkit-box-shadow: 0px 15px 13px -8px rgb(0 0 0 / 57%);
    -moz-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    box-shadow: 0px 15px 13px -8px rgb(0 0 0 / 57%);
    width: 70%;
    height: 80%;
    border: 1px solid ${roseRed};
    padding: 3%;
    display: ${props=>props.visible ? 'block': 'none'};
    position: absolute;
    top: 10%;
    h2{cursor: pointer; color: ${roseRed}}
    p{
        letter-spacing: 1px;
    }
    @media screen and (max-width: 1200px){
        top: -8%;
        width: 90%;
        margin: 15% auto;
    }
    @media screen and (max-width: 935px){
        top: 0%;
        width: 90%;
        margin: 15% auto;
        height: auto;
    }
    img {
        width: 80%;
    }
`

export const FactsContainer = styled.div`
    background: ${blush};
    -webkit-box-shadow: 0px 15px 13px -8px rgb(0 0 0 / 57%);
    -moz-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    box-shadow: 0px 15px 13px -8px rgb(0 0 0 / 57%);
    border: 1px solid black;
    padding: 2%;
    margin-bottom: 3%;
    text-align: center;
`