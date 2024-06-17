export interface TAuthState {
  email: string | null
  token: {
    access: string | null
    refresh: string | null
  }
}
