import HomePage from "../pages/home.page.tsx"
import Login from "../pages/Auth/login.page.tsx"
import Register from "../pages/Auth/register.page.tsx"
import { ReactElement } from "react"
import NotfoundPage from "../pages/notfound.page.tsx"

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
    element: <HomePage />,
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
    element: <NotfoundPage />,
  },
}

export default routes
