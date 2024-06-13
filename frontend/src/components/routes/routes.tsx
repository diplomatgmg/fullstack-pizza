import Home from "../../pages/Home.tsx"
import Login from "../../pages/Login.tsx"
import Register from "../../pages/Register.tsx"
import { ReactElement } from "react"

enum RouteKeys {
  HOME = "home",
  LOGIN = "login",
  REGISTER = "register",
}

interface TRoute {
  path: string
  element: ReactElement
}

type TRoutes = {
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
}

export default routes
