import { TPizza } from "./pizzaTypes.ts"

export type TPizzaResponse = {
  results: TPizza[]
  total_pages: number
}

export type TPizzaQueryResult = {
  results: TPizza[]
  totalPages: number
}
