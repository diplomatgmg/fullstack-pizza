import styled from "styled-components"
import { Link } from "react-router-dom"
import { colors, fontWeights } from "../../styles/theme.ts"

export const AuthContainer = styled.div`
  width: 250px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`

export const AuthInputGroup = styled.div`
  position: relative;
`

export const AuthInput = styled.input`
  border: 1px solid ${colors.lightGray};
  border-radius: 1.5rem;
  padding: 0.5rem 1.25rem;

  &:focus {
    outline: none;
    border: 1px solid ${colors.red};
  }
`

export const AuthError = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  white-space: nowrap;
  font-size: 0.7rem;
  font-weight: ${fontWeights.bold};
  color: ${colors.red};
`

export const AuthLink = styled(Link)`
  margin: 1.5rem 1rem 0.5rem 1rem;
  color: ${colors.orange};
  font-weight: ${fontWeights.bold};
`
