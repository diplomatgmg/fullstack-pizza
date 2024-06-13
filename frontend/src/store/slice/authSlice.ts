import { TAuthState } from "../../types/store/authTypes.ts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: TAuthState = {
  token: null,
  refreshToken: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TAuthState>) => {
      state.token = action.payload.token
      state.refreshToken = action.payload.refreshToken
    },
    logout: (state) => {
      state.token = null
      state.refreshToken = null
    },
  },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer
