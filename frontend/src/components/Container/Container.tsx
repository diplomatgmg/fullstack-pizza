import { FC, type ReactElement } from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme.ts"

interface ContainerProps {
  children: ReactElement
}

const ContainerStyle = styled.div`
  padding: 1.5rem 4rem 0 4rem;
`

const BorderStyle = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${colors.lightGray};
`

const Container: FC<ContainerProps> = ({ children }): ReactElement => {
  return (
    <ContainerStyle>
      <BorderStyle>{children}</BorderStyle>
    </ContainerStyle>
  )
}

export default Container
