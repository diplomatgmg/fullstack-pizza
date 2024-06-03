import { ReactElement } from "react"
import styled from "styled-components"

const DelimiterStyle = styled.div`
  width: 1px;
  height: 15px;
  margin: 0 0.5rem;
  background-color: rgba(255, 255, 255, 0.4);
`

const Delimiter = (): ReactElement => {
  return <DelimiterStyle></DelimiterStyle>
}

export default Delimiter
