import { FC, type ReactElement } from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme.ts"

interface ContainerProps {
  children: ReactElement
  withBorder?: boolean
}

const ContainerStyle = styled.div`
  padding: 1.25rem 4rem 0 4rem;

  &:last-child {
    padding-bottom: 1.25rem;
  }
`

const BorderStyle = styled.div`
  padding-bottom: 1.25rem;
  border-bottom: 1px solid ${colors.lightGray};
`

const Container: FC<ContainerProps> = ({
  children,
  withBorder = true,
}): ReactElement => {
  return (
    <ContainerStyle>
      {withBorder ? <BorderStyle>{children}</BorderStyle> : children}
    </ContainerStyle>
  )
}

export default Container
