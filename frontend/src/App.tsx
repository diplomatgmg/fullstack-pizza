import GlobalStyle from "./styles/global.ts"
import Header from "./components/Header/Header.tsx"
import Container from "./components/Container/Container.tsx"
import styled from "styled-components"
import { colors } from "./styles/theme.ts"
import FilterPanel from "./components/FilterPanel/FilterPanel.tsx"
import Pizza from "./components/Pizza/Pizza.tsx"
import Pagination from "./components/Pagination/Pagination.tsx"

const AppStyle = styled.div`
  margin: 2rem;
  background-color: ${colors.white};
  border-radius: 2rem;
`

function App() {
  return (
    <AppStyle>
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

      <GlobalStyle />
    </AppStyle>
  )
}

export default App
