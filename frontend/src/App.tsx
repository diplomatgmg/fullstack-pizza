import GlobalStyle from "./styles/global.ts"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./components/routes/Router.tsx"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
