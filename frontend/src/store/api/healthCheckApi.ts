import { createApi } from "@reduxjs/toolkit/query/react"
import baseQuery from "./baseApi.ts"

export const healthCheckApi = createApi({
  reducerPath: "healthCheckApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    healthCheck: build.query<void, void>({
      query: () => "health-check/",
    }),
  }),
})

export const { useHealthCheckQuery } = healthCheckApi
export default healthCheckApi
