import baseQuery from "./baseApi.ts"
import { createApi } from "@reduxjs/toolkit/query/react"
import {
  TAddCartItemPayload,
  TCart,
  TCartItem,
  TRemoveCartItemPayload,
  TUpdateCartItemPayload,
} from "../../types/api/cartTypes.ts"

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQuery,
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    fetchCart: builder.query<TCart, unknown | void>({
      query: () => "cart/",
      providesTags: ["Cart"],
    }),
    addCartItem: builder.mutation<TCartItem, TAddCartItemPayload>({
      query: (body) => ({
        url: "cart/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCartItem: builder.mutation<TCartItem, TUpdateCartItemPayload>({
      query: (body) => ({
        url: "cart/",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCartItem: builder.mutation<void, TRemoveCartItemPayload>({
      query: (body) => ({
        url: "cart/",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
})

export const {
  useFetchCartQuery,
  useAddCartItemMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
} = cartApi

export default cartApi
