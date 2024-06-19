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
  email: string
}

export interface TRegisterResponse {
  email: string
}

export type ErrorResponse = {
  status: number
  data: {
    [key: string]: unknown
  }
}
