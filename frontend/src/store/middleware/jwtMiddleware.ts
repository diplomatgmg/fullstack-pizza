import type { Middleware } from "@reduxjs/toolkit"
import { isRejectedWithValue } from "@reduxjs/toolkit"
import { RootState } from "../store.ts"
import baseQuery from "../api/baseApi.ts"
import { TTokenResponse } from "../../types/api/responseTypes.ts"
import { logout, setTokens } from "../slice/authSlice.ts"

interface RejectedAction {
  payload: {
    status?: number
  }
}

const jwtMiddleware: Middleware = ({ dispatch, getState }) => {
  return (next) => async (a) => {
    const action = a as RejectedAction

    if (isRejectedWithValue(action) && action.payload?.status === 401) {
      const state = getState() as RootState

      const refreshToken = state.auth.token.refresh

      // @ts-expect-error TS2554 Error: Expected 3 arguments, but got 2
      const refreshResult = await baseQuery(
        {
          url: "token/refresh/",
          method: "POST",
          body: { refresh: refreshToken },
        },
        { dispatch, getState }
      )

      if (refreshResult.error?.status === 401) {
        dispatch(logout())
        window.location.reload()
      } else {
        console.log("vse OK")
        dispatch(setTokens(refreshResult.data as TTokenResponse))
        window.location.reload()

        return next({
          ...action,
          meta: {
            ...action.meta,
            retry: true,
          },
        })
      }
    }

    return next(action)
  }
}
export default jwtMiddleware
