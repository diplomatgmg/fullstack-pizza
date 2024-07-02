import { TCart } from "../types/api/cartTypes.ts"

const getCartSum = (cart: TCart | null): number | string => {
  if (!cart) {
    return "..."
  }

  return cart.items.reduce((sum, item) => {
    return sum + parseFloat(item.pizza.price) * item.quantity
  }, 0)
}

export default getCartSum
