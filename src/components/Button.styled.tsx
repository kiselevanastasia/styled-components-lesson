import styled from "styled-components";
import { css } from "styled-components";

type ButtonPropsType = {
  outline?: boolean
  primary?: boolean
}

export const Button = styled.button<ButtonPropsType>`
  position: relative;
  top: 65px;
  left: 40px;
  height: 30px;
  width: 86px;
  border-radius: 5px;
  line-height: 20px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  
  button + button {
    margin-left: 10px;
  }


  ${props => props.outline && css<ButtonPropsType>`
  background-color: transparent;
  border: 2px solid #4E71FE;
  color: #4E71FE;
  
  &:hover{  
    background-color:#4E71FE;
    color: #FFFFFF;
  } 
  ` }

  ${props => props.primary && css<ButtonPropsType>`
  background-color:#4E71FE;
  border: 2px solid #4E71FE; 
  color: #FFFFFF;

  &:hover{
  background-color: transparent;
  color: #4E71FE;
  }
  `}

`
