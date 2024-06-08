import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TSearchParams } from "../../types/searchParamsTypes.ts"
import { TPizzaQueryResult, TPizzaResponse } from "../../types/responseTypes.ts"

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (build) => ({
    getPizza: build.query<TPizzaQueryResult, TSearchParams>({
      query: (params) => ({
        url: "pizza/",
        params,
      }),
      transformResponse: (response: TPizzaResponse): TPizzaQueryResult => {
        return {
          results: response.results,
          totalPages: response.total_pages,
        }
      },
    }),
  }),
})

export const { useGetPizzaQuery } = pizzaApi
export default pizzaApi
