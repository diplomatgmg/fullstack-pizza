import { configureStore } from "@reduxjs/toolkit"
import pizzaApi from "./api/pizzaApi.ts"
import searchParamsReducer from "./slice/searchParamsSlice.ts"

const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    searchParams: searchParamsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
