import React from "react"
import GlobalStyle from "../styles/global"
import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import styled from "styled-components"
import { colors } from "../styles/theme"
import Register from "../components/Auth/Register.tsx"

const RegisterStyle = styled.div`
  margin: 2rem;
  background-color: ${colors.white};
  border-radius: 2rem;
`

const RegisterPage: React.FC = () => {
  return (
    <RegisterStyle>
      <Container>
        <Header />
      </Container>

      <Container withBorder={false}>
        <Register />
      </Container>

      <GlobalStyle />
    </RegisterStyle>
  )
}

export default RegisterPage
