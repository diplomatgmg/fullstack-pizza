import baseQuery from "./baseApi.ts"
import { createApi } from "@reduxjs/toolkit/query/react"

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "token/",
        method: "POST",
        body: credentials,
      }),
    }),
    refresh: builder.mutation({
      query: (refreshToken) => ({
        url: "token/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      }),
    }),
  }),
})

export const { useLoginMutation, useRefreshMutation } = authApi

export default authApi
