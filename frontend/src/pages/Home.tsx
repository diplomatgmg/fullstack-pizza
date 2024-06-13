import React from "react"
import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import styled from "styled-components"
import { colors } from "../styles/theme"
import FilterPanel from "../components/FilterPanel/FilterPanel"
import Pizza from "../components/Pizza/Pizza"
import Pagination from "../components/Pagination/Pagination"

const HomeStyle = styled.div`
  margin: 2rem;
  background-color: ${colors.white};
  border-radius: 2rem;
`

const Home: React.FC = () => {
  return (
    <HomeStyle>
      <Container>
        <Header />
      </Container>

      <Container>
        <FilterPanel />
      </Container>

      <Container>
        <Pizza />
      </Container>

      <Container withBorder={false}>
        <Pagination />
      </Container>
    </HomeStyle>
  )
}

export default Home
