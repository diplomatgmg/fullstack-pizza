import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TPizza } from "../../types/pizzaTypes.ts"

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (build) => ({
    getPizza: build.query<TPizza[], void>({
      query: () => "pizza/",
    }),
  }),
})

export const { useGetPizzaQuery } = pizzaApi
export default pizzaApi
