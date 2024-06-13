import React from "react"
import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import styled from "styled-components"
import { colors } from "../styles/theme"
import Login from "../components/Auth/Login.tsx"

const LoginStyle = styled.div`
  margin: 2rem;
  background-color: ${colors.white};
  border-radius: 2rem;
`

const LoginPage: React.FC = () => {
  return (
    <LoginStyle>
      <Container>
        <Header />
      </Container>

      <Container withBorder={false}>
        <Login />
      </Container>
    </LoginStyle>
  )
}

export default LoginPage
