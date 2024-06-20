import GlobalStyle from "./styles/global.ts"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router.tsx"
import { useHealthCheckQuery } from "./store/api/healthCheckApi.ts"
import BackendError from "./components/Errors/BackendError.tsx"

const App = () => {
  const { isError } = useHealthCheckQuery()

  if (isError) {
    return (
      <>
        <BackendError />
        <GlobalStyle />
      </>
    )
  }

  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
