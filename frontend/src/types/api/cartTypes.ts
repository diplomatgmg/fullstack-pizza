import { TPizza } from "./pizzaTypes.ts"

export interface TCartItem {
  id: number
  pizza: TPizza
  quantity: number
}

export interface TCart {
  items: TCartItem[]
}

export interface TAddCartItemPayload {
  pizza: number
}

export interface TRemoveCartItemPayload {
  pizza: number | "all"
}

export interface TUpdateCartItemPayload {
  pizza: number
  quantity: number
}
