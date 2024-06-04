import { FC, type ReactElement } from "react"
import styled, { ThemeProvider } from "styled-components"
import { colors, fontWeights } from "../../styles/theme.ts"

interface ButtonProps {
  children: string | ReactElement
  bgColor?: string
  color?: string
  hoverBgColor?: string
  hoverColor?: string
  fontWeight?: number
}

interface ButtonStyledProps {
  theme: {
    bgColor: string
    color: string
    hoverBgColor: string
    hoverColor: string
    fontWeight: number
  }
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: 0.9rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.1s ease;
  position: relative;
  user-select: none;
  letter-spacing: 0.05rem;

  &:hover {
    transform: translateY(-3px);
    background-color: ${(props) => props.theme.hoverBgColor};
    color: ${(props) => props.theme.hoverColor};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  }
`

const Button: FC<ButtonProps> = ({
  children,
  bgColor = colors.orange,
  color = colors.white,
  hoverBgColor = "#f66e00",
  hoverColor = colors.white,
  fontWeight = fontWeights.bold,
}): ReactElement => {
  return (
    <ThemeProvider
      theme={{
        bgColor,
        color,
        hoverBgColor,
        hoverColor,
        fontWeight: fontWeight,
      }}>
      <ButtonStyled>{children}</ButtonStyled>
    </ThemeProvider>
  )
}

export default Button
