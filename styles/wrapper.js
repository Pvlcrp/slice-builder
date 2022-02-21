import styled from "styled-components"
import { siteWidth, wrapperPadding } from "./media-helper"

const Wrapper = styled.div`
  box-sizing: content-box;
  max-width: ${siteWidth}px;
  margin: 0 auto;
  padding: 0 ${wrapperPadding}px;
`

export default Wrapper