import { TAuthState } from "../../types/store/authTypes.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  TLoginResponse,
  TRegisterResponse,
} from "../../types/api/responseTypes.ts"

const initialState: TAuthState = {
  isAuthenticated: localStorage.getItem("accessToken") !== null,
  email: localStorage.getItem("email"),
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
      const { email, access, refresh } = action.payload
      state.email = email
      state.token.access = access
      state.token.refresh = refresh
      localStorage.setItem("accessToken", access)
      localStorage.setItem("refreshToken", refresh)
      localStorage.setItem("email", email)
    },
    setEmail: (state, action: PayloadAction<TRegisterResponse>) => {
      state.email = action.payload.email
    },
    logout: (state) => {
      state.email = null
      state.token.access = null
      state.token.refresh = null
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("email")
    },
  },
})

export const { setCredentials, setEmail, logout } = authSlice.actions

export default authSlice.reducer
