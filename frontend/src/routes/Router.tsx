import { ReactElement } from "react"
import { Routes, Route } from "react-router-dom"
import _ from "lodash"
import routes, { TRoutes } from "./routes"

const Router = (): ReactElement => {
  const generateRoutes = (routes: TRoutes) =>
    _.map(routes, (route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))

  return <Routes>{generateRoutes(routes)}</Routes>
}

export default Router
