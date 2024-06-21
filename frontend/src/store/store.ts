import { configureStore } from "@reduxjs/toolkit"
import pizzaApi from "./api/pizzaApi.ts"
import searchParamsReducer from "./slice/searchParamsSlice.ts"
import authReducer from "./slice/authSlice.ts"
import authApi from "./api/authApi.ts"
import healthCheckApi from "./api/healthCheckApi.ts"
import jwtMiddleware from "./middleware/jwtMiddleware.ts"

const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [healthCheckApi.reducerPath]: healthCheckApi.reducer,
    searchParams: searchParamsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pizzaApi.middleware,
      authApi.middleware,
      healthCheckApi.middleware,
      jwtMiddleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
