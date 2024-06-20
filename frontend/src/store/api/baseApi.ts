import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../baseUrl.ts"
import { RootState } from "../store.ts"

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    if (endpoint === "healthCheck") {
      return new Headers()
    }

    const accessToken = (getState() as RootState).auth.token.access

    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`)
    }
    return headers
  },
})

export default baseQuery
