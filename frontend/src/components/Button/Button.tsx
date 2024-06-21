import { FC, type ReactElement } from "react"
import styled, { ThemeProvider } from "styled-components"
import { colors, fontWeights } from "../../styles/theme.ts"

interface ButtonProps {
  children: string | number | ReactElement | ReactElement[]
  onClick?: () => void
  type?: "button" | "submit"
  width?: string
  color?: string
  hoverColor?: string
  bgColor?: string
  hoverBgColor?: string
  borderColor?: string
  hoverBorderColor?: string
  fontWeight?: number
  disabled?: boolean
}

interface ButtonStyledProps {
  theme: {
    width: ButtonProps["width"]
    fontWeight: ButtonProps["fontWeight"]
    color: ButtonProps["color"]
    hoverColor: ButtonProps["hoverColor"]
    bgColor: ButtonProps["bgColor"]
    hoverBgColor: ButtonProps["hoverBgColor"]
    borderColor: ButtonProps["borderColor"]
    hoverBorderColor: ButtonProps["hoverBorderColor"]
  }
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${(props) => props.theme.width};
  min-width: 60px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  font-weight: ${(props) => props.theme.fontWeight};
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  font-size: 0.9rem;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  transition: all 0.1s linear;
  position: relative;
  user-select: none;
  letter-spacing: 0.05rem;

  &:hover {
    transform: translateY(-3px);
    background-color: ${(props) => props.theme.hoverBgColor};
    color: ${(props) => props.theme.hoverColor};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    border-color: ${(props) => props.theme.hoverBorderColor};
  }
`

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  width = "auto",
  fontWeight = fontWeights.bold,
  color = colors.white,
  hoverColor = colors.white,
  bgColor = colors.orange,
  hoverBgColor = colors.orange,
  borderColor = "transparent",
  hoverBorderColor = "transparent",
  disabled = false,
}): ReactElement => {
  return (
    <ThemeProvider
      theme={{
        width,
        fontWeight,
        color,
        hoverColor,
        bgColor,
        hoverBgColor,
        borderColor,
        hoverBorderColor,
      }}>
      <ButtonStyled type={type} onClick={onClick} disabled={disabled}>
        {children}
      </ButtonStyled>
    </ThemeProvider>
  )
}

export default Button
