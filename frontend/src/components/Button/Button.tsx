import { FC, type ReactElement } from "react"
import styled from "styled-components"
import { colors, fontWeights } from "../../styles/theme.ts"

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-weight: ${fontWeights.black};
  font-size: 0.9rem;
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  user-select: none;
  letter-spacing: 0.05rem;

  &:hover {
    transform: translateY(-3px);
    background-color: #f66e00;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  }
`

interface ButtonProps {
  text?: string
  children?: ReactElement
}

const Button: FC<ButtonProps> = ({ text, children }): ReactElement => {
  if (text) {
    return <ButtonStyled>{text}</ButtonStyled>
  }

  return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
