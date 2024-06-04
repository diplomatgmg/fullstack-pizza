import { FC, type ReactElement } from "react"
import styled from "styled-components"

const ContainerStyle = styled.div`
  padding: 2rem 4rem 0 4rem;
`

interface ContainerProps {
  children: ReactElement
}
const Container: FC<ContainerProps> = ({ children }): ReactElement => {
  return <ContainerStyle>{children}</ContainerStyle>
}

export default Container
