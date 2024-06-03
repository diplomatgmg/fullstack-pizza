import { FC, type ReactElement } from "react"
import styled from "styled-components"
import { colors, fontWeights } from "../../styles/theme.ts"

const ButtonStyled = styled.button`
  background-color: ${colors.orange};
  color: ${colors.white};
  font-weight: ${fontWeights.black};
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  user-select: none;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    background-color: #f66e00;
  }
`

interface ButtonProps {
  text: string
}

const Button: FC<ButtonProps> = ({ text }): ReactElement => {
  return <ButtonStyled>{text}</ButtonStyled>
}

export default Button
