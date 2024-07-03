import { TAuthState } from "../../types/store/authTypes.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  TLoginResponse,
  TRegisterResponse,
  TTokenResponse,
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
      state.isAuthenticated = true
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
    setTokens: (state, action: PayloadAction<TTokenResponse>) => {
      const { access, refresh } = action.payload
      state.token.access = access
      state.token.refresh = refresh
      localStorage.setItem("accessToken", access)
      localStorage.setItem("refreshToken", refresh)
    },

    logout: (state) => {
      state.isAuthenticated = false
      state.email = null
      state.token.access = null
      state.token.refresh = null
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("email")
    },
  },
})

export const { setCredentials, setEmail, setTokens, logout } = authSlice.actions

export default authSlice.reducer
