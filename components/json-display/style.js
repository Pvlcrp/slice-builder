import styled from "styled-components"

const Pre = styled.pre`
  border: 2px solid ${props => props.theme.pink};
  border-radius: 8px;
  padding: 16px;
  background-color: ${props => props.theme.pink}11;

  font-size: 12px;
  line-height: 18px;
  font-family: monospace;
  overflow: auto;
`

export {
  Pre,
}