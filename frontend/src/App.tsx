import GlobalStyle from "./styles/global.ts"
import Header from "./components/Header/Header.tsx"
import Container from "./components/Container/Container.tsx"
import styled from "styled-components"
import { colors } from "./styles/theme.ts"
import FilterPanel from "./components/FilterPanel/FilterPanel.tsx"
import PizzaList from "./components/Pizza/PizzaList.tsx"
import PaginationList from "./components/Pagination/PaginationList.tsx"

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
        <PizzaList />
      </Container>

      <PaginationList />

      <GlobalStyle />
    </AppStyle>
  )
}

export default App
