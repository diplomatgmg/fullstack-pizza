import { FC, type ReactElement } from "react"
import { TCartItem } from "../../types/api/cartTypes.ts"
import CartItem from "./CartItem.tsx"

interface CartListProps {
  items: TCartItem[]
}

const CartList: FC<CartListProps> = ({ items }): ReactElement => {
  return (
    <ul>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CartList
