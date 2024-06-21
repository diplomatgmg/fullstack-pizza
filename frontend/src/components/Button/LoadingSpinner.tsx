import styled, { keyframes, ThemeProvider } from "styled-components"
import { colors } from "../../styles/theme.ts"
import { FC } from "react"

interface SpinnerProps {
  borderColor?: string
  spinnerColor?: string
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

interface SpinnerStyledProps {
  theme: {
    borderColor: string
    spinnerColor?: string
  }
}

const Spinner = styled.div<SpinnerStyledProps>`
  border: 4px solid ${(props) => props.theme.borderColor};
  border-top: 4px solid ${(props) => props.theme.spinnerColor};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
  margin: -8px;
`

const LoadingSpinner: FC<SpinnerProps> = ({
  borderColor = colors.white,
  spinnerColor = colors.orange,
}) => {
  return (
    <ThemeProvider theme={{ borderColor, spinnerColor }}>
      <Spinner />
    </ThemeProvider>
  )
}

export default LoadingSpinner
