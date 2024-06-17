import baseQuery from "./baseApi.ts"
import { createApi } from "@reduxjs/toolkit/query/react"
import {
  TLoginResponse,
  TRegisterResponse,
} from "../../types/api/responseTypes.ts"
import {
  TLoginRequest,
  TRegisterRequest,
} from "../../types/api/requestTypes.ts"

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, TLoginRequest>({
      query: (credentials) => ({
        url: "token/",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<TRegisterResponse, TRegisterRequest>({
      query: (credentials) => ({
        url: "register/",
        method: "POST",
        body: credentials,
      }),
    }),
    refresh: builder.mutation<unknown, unknown>({
      // TODO
      query: (refreshToken) => ({
        url: "token/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useRefreshMutation } =
  authApi

export default authApi
