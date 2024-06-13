import { type ReactElement } from "react"
import { Routes, Route } from "react-router-dom"
import routes from "./routes.tsx"

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path={routes.home.path} element={routes.home.element} />
      <Route path={routes.login.path} element={routes.login.element} />
      <Route path={routes.register.path} element={routes.register.element} />
    </Routes>
  )
}

export default Router
