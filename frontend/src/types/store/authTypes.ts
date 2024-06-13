export interface TAuthState {
  token: {
    access: string | null
    refresh: string | null
  }
}
