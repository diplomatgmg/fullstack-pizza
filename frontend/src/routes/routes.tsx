import Home from "../pages/Home.tsx"
import Login from "../pages/Login.tsx"
import Register from "../pages/Register.tsx"
import { ReactElement } from "react"
import NotFound from "../pages/NotFound.tsx"

export enum RouteKeys {
  HOME = "home",
  LOGIN = "login",
  REGISTER = "register",
  NOT_FOUND = "not_found",
}

interface TRoute {
  path: string
  element: ReactElement
}

export type TRoutes = {
  [key in RouteKeys]: TRoute
}

const routes: TRoutes = {
  [RouteKeys.HOME]: {
    path: "/",
    element: <Home />,
  },
  [RouteKeys.LOGIN]: {
    path: "/login",
    element: <Login />,
  },
  [RouteKeys.REGISTER]: {
    path: "/register",
    element: <Register />,
  },
  [RouteKeys.NOT_FOUND]: {
    path: "*",
    element: <NotFound />,
  },
}

export default routes
