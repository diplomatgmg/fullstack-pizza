import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../baseUrl.ts"
import { RootState } from "../store.ts"

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

export default baseQuery
