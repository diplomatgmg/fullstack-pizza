import { logout } from "../slice/authSlice.ts"
import type { Middleware } from "@reduxjs/toolkit"
import { isRejectedWithValue } from "@reduxjs/toolkit"

interface RejectedAction {
  payload: {
    status?: number
  }
}

const jwtMiddleware: Middleware = ({ dispatch }) => {
  return (next) => (a) => {
    const action = a as RejectedAction

    if (isRejectedWithValue(action) && action.payload?.status === 401) {
      dispatch(logout())
      window.location.reload()
    }

    return next(action)
  }
}
export default jwtMiddleware
