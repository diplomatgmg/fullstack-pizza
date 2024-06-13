import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  TNormalizedSearchParams,
  TSearchParams,
} from "../../types/store/searchParamsTypes.ts"
import {
  TPizzaQueryResult,
  TPizzaResponse,
} from "../../types/api/responseTypes.ts"
import { TCategory } from "../../types/api/pizzaTypes.ts"
import { BASE_URL } from "../../baseUrl.ts"

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getPizza: build.query<TPizzaQueryResult, TSearchParams>({
      query: (params) => {
        const { selectedFilter, ...rest } = params
        const normalizedParams: TNormalizedSearchParams = {
          ...rest,
          ordering: selectedFilter.ordering,
        }

        return {
          url: "pizza/",
          params: normalizedParams,
        }
      },
      transformResponse: (response: TPizzaResponse): TPizzaQueryResult => {
        return {
          results: response.results,
          totalPages: response.total_pages,
        }
      },
    }),
    getCategories: build.query<TCategory[], void>({
      query: () => "categories/",
    }),
  }),
})

export const { useGetPizzaQuery, useGetCategoriesQuery } = pizzaApi
export default pizzaApi
