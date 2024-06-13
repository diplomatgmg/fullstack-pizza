import { configureStore } from "@reduxjs/toolkit"
import pizzaApi from "./api/pizzaApi.ts"
import searchParamsReducer from "./slice/searchParamsSlice.ts"
import authReducer from "./slice/authSlice.ts"
import authApi from "./api/authApi.ts"

const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    searchParams: searchParamsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
