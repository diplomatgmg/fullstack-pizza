import styled, { keyframes } from "styled-components"
import { colors } from "../../styles/theme.ts"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
  border: 4px solid ${colors.white};
  border-top: 4px solid ${colors.grey};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
  margin: -8px;
`

const LoadingSpinner = () => <Spinner />

export default LoadingSpinner
