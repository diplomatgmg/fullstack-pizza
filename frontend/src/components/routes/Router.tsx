import { type ReactElement } from "react"
import { Routes, Route } from "react-router-dom"
import routes from "./routes.tsx"
import Home from "../../pages/Home.tsx"
import Login from "../../pages/Login.tsx"
import Register from "../../pages/Register.tsx"

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path={routes.home.path} element={<Home />} />
      <Route path={routes.login.path} element={<Login />} />
      <Route path={routes.register.path} element={<Register />} />
    </Routes>
  )
}

export default Router
