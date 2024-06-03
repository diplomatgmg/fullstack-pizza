import GlobalStyle from "./styles/global.ts"
import Header from "./components/Header/Header.tsx"
import Wrapper from "./components/Wrapper/Wrapper.tsx"

function App() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
      <GlobalStyle />
    </>
  )
}

export default App
