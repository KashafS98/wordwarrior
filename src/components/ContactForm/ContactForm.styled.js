import styled from "styled-components";
import { blush } from "../../utils/colors";

const boxStyle = (height, width) => `
    width: ${width};
    @media screen and (max-width: 720px){
      width: 90%;
    }
    height: ${60 * height}px;
    border: 1px solid;
    border-radius: 4px;
    outline: none;
    margin: 2%;
    padding: 3%;
    background: ${blush};
    transition: 0.8s ease-in-out;
    :hover {
      -webkit-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
      box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    }
    :focus {
      -webkit-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
      -moz-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
      box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    }
    ::-webkit-autofill{
        background: ${blush} !important;
    }
    ::-webkit-input-placeholder {
        color: #6a6e79b5;
        font-weight: 700;
      }
  
`;

export const StyledForm = styled.form`
  display: flex;
  width: 60%;
  min-height: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1200px){
    width: 90%;
  }
  @media screen and (max-width: 720px){
    width: 90%;
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  @media screen and (max-width: 720px){
    width: 90%;
    margin: 0 auto;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
      font-size: 48px;
      margin: 0;
      margin-right: 5%;
  }
  input {
    ${boxStyle(1, '90%')}
  }
  select {
    ${boxStyle(1, '90%')}
  }
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 720px){
    width: 90%;
    margin: 0 auto;
    align-items: center;
  }
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  textarea {
    width: 400px;
    ${boxStyle(4, '100%')};
  }
  button {
    margin: 5%;
    width: 40%;
  }
`;
