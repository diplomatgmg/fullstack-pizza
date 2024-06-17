import { TPizza } from "./pizzaTypes.ts"

export interface TPizzaResponse {
  results: TPizza[]
  total_pages: number
}

export interface TPizzaQueryResult {
  results: TPizza[]
  totalPages: number
}

export interface TLoginResponse {
  access: string
  refresh: string
}

export interface TRegisterResponse {
  email: string
}
