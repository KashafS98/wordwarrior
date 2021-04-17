import styled from "styled-components";

const boxStyle = (height, width) => `
    width: ${width};
    height: ${60 * height}px;
    border: none;
    border-radius: 4px;
    outline: none;
    margin: 2%;
    padding: 3%;
    background: #BCB1BC;
    -webkit-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    box-shadow: 0px 15px 13px -8px rgba(0,0,0,0.57);
    transition: 0.8s ease-in-out;
    :hover {
        -webkit-box-shadow: 0px 15px 13px 0px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 15px 13px 0px rgba(0,0,0,0.57);
    box-shadow: 0px 15px 13px 0px rgba(0,0,0,0.57);
    }
    :focus {
        -webkit-box-shadow: 0px 15px 47px -23px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 15px 47px -23px rgba(0,0,0,0.57);
        box-shadow: 0px 15px 47px -23px rgba(0,0,0,0.57);
    }
    ::-webkit-autofill{
        background: #BCB1BC !important;
    }
    ::-webkit-input-placeholder {
        color: #6a6e79b5;
        font-weight: 700;
      }
`;

export const StyledForm = styled.form`
  display: flex;
  width: 50%;
  height: 70%;
  margin: 0 auto;
`;

export const LeftSide = styled.div`
  width: 50%;
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
    ${boxStyle(0.8, '90%')}
  }
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  textarea {
    width: 400px;
    ${boxStyle(4, '100%')}
  }
  button {
    margin-left: 5%;
    width: 40%;
  }
`;
