import { FC, type ReactElement } from "react"
import styled from "styled-components"
import { colors } from "../../styles/theme.ts"

interface FullScreenErrorProps {
  title: string
  description: string
}

const FullScreenErrorStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  z-index: 100;
`

const Title = styled.h1`
  font-size: 4.5rem;
  color: ${colors.white};
  user-select: none;
  margin: 0;
`

const Description = styled.p`
  font-size: 1.5rem;
  user-select: none;
  color: ${colors.lightGray};
`

const FullScreenBaseError: FC<FullScreenErrorProps> = ({
  title,
  description,
}): ReactElement => {
  return (
    <FullScreenErrorStyle>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </FullScreenErrorStyle>
  )
}

export default FullScreenBaseError
