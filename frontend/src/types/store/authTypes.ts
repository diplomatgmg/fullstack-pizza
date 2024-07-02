export interface TAuthState {
  isAuthenticated: boolean
  email: string | null
  token: {
    access: string | null
    refresh: string | null
  }
}
