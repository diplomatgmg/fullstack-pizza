import { configureStore } from "@reduxjs/toolkit"
import pizzaApi from "./api/pizzaApi.ts"

const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),
})

export default store
