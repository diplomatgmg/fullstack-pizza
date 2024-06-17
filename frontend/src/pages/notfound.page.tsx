import { ReactElement } from "react"
import styled from "styled-components"
import Header from "../components/Header/Header.tsx"
import Container from "../components/Container/Container.tsx"
import { colors } from "../styles/theme.ts"

const NotFoundStyle = styled.div`
  margin: 2rem;
  background-color: ${colors.white};
  border-radius: 2rem;
`

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
`

const NotfoundPage = (): ReactElement => {
  return (
    <NotFoundStyle>
      <Container>
        <Header />
      </Container>

      <Container withBorder={false}>
        <Title>404 - Page Not Found</Title>
      </Container>
    </NotFoundStyle>
  )
}

export default NotfoundPage
