import { TCart } from "../types/api/cartTypes.ts"

const getCartCount = (cart: TCart | null): number | string => {
  if (!cart) {
    return "..."
  }

  return cart.items.reduce((acc, item) => acc + item.quantity, 0)
}

export default getCartCount
