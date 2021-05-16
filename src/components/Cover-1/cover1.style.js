import styled, {keyframes} from 'styled-components'

const animate = keyframes`
  0% {
    content: "FRONTEND";
    color: #C6005C;
    letter-spacing: 10px;
    filter: drop-shadow(#C6005CE6 0 0 3.8px)
        drop-shadow(#C6005CB3 0 0 19px)
        drop-shadow(#C6005C80 0 0 50px);
  }
  20% {
    content: "FULL STACK";
    font-weight: 700;
    -webkit-text-stroke: 2px #5C0199;
    -webkit-text-fill-color: transparent;
    text-shadow: #d60f6d 3px 3px 0px;
    filter: none;
  }
  40% {
    content: "WEBSITE";
    color: olivedrab;
    font-weight: 700;
    -webkit-text-stroke: 2px #A18288;
    -webkit-text-fill-color: yellow;
    text-shadow: none;
  }
  60% {
    content: "WEB APPS";
    letter-spacing: 10px;
    color: white;
    -webkit-text-fill-color: white;

    text-shadow: cyan 6px -2px 0px, red -6px 2px 0px;
    -webkit-text-stroke: none;
  }
  80% {
    content: "User Interface";
    -webkit-text-fill-color: white;
    color: white;
    font-family: Dancing Script;
    text-shadow: none;
    -webkit-text-stroke: white;
    filter: drop-shadow(rgba(0, 255, 255, 0.95) 0px 0px 4.4906px)
    drop-shadow(rgba(0, 255, 255, 0.75) 0px 0px 27.453px)
    drop-shadow(rgba(0, 255, 255, 0.44) 0px 0px 82.359px);
  }
`;

export const CoverContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
      font-size: 16px;
      width: 80%;
      margin: 0 auto 5%;
      text-align: center;
  }
  h1 {
    font-size: 64px;
  }
    h1::before {
        color: white;
        content: "THIS";
        font-size: 64px;
        letter-spacing: 10px;
        font-weight: 700;
        animation: ${animate} 5s steps(1, end) infinite;
  }
`