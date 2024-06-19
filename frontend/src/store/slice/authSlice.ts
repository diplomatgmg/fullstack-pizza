import { TAuthState } from "../../types/store/authTypes.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  TLoginResponse,
  TRegisterResponse,
} from "../../types/api/responseTypes.ts"

const initialState: TAuthState = {
  email: null,
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
      state.email = action.payload.email
      localStorage.setItem("accessToken", action.payload.access)
      localStorage.setItem("refreshToken", action.payload.refresh)
    },
    setEmail: (state, action: PayloadAction<TRegisterResponse>) => {
      state.email = action.payload.email
    },
    logout: (state) => {
      state.token.access = null
      state.token.refresh = null
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
    },
  },
})

export const { setCredentials, setEmail, logout } = authSlice.actions

export default authSlice.reducer
