import { TSortOption } from "../../constants.ts"

export type TOrderingFields = "" | "name" | "-name" | "price" | "-price"

export interface TSearchParams {
  page: number
  category: string
  selectedFilter: TSortOption
}

export interface TNormalizedSearchParams {
  page: number
  category: string
  ordering: TOrderingFields
}
