import { FC, type ReactElement } from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme.ts"

const WrapperStyle = styled.div`
  margin: 2rem;
  padding: 2rem 4rem;
  background-color: ${colors.white};
  border-radius: 2rem;
  height: calc(100vh - 8rem);
`

interface WrapperProps {
  children: ReactElement
}

const Wrapper: FC<WrapperProps> = ({ children }): ReactElement => {
  return <WrapperStyle>{children}</WrapperStyle>
}

export default Wrapper
