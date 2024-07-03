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

export interface TTokenResponse {
  access: string
  refresh: string
}

export type ErrorResponse = {
  status: number
  data: {
    detail: string
    [key: string]: unknown
  }
}
