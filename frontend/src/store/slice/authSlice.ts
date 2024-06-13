import { TAuthState } from "../../types/store/authTypes.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TLoginResponse } from "../../types/api/responseTypes.ts"

const initialState: TAuthState = {
  token: {
    access: localStorage.getItem("accessToken"),
    refresh: localStorage.getItem("refreshToken"),
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TLoginResponse>) => {
      state.token.access = action.payload.access
      state.token.refresh = action.payload.refresh
      localStorage.setItem("accessToken", action.payload.access)
      localStorage.setItem("refreshToken", action.payload.refresh)
    },
    logout: (state) => {
      state.token.access = null
      state.token.refresh = null
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
    },
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
