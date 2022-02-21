import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  display: block;
  height: 56px;
  line-height: 56px;
  font-size: 15px;
  font-weight: 400;

  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0 24px;
  
  &:focus,
  &:active {
    outline: 0;
    background: #eee;
  }
`

export default Button