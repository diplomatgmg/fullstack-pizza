export type TOrderingFields = "" | "name" | "-name" | "price" | "-price"

export interface TSearchParams {
  page: number
  category: string
  ordering: TOrderingFields
  name: string
}
