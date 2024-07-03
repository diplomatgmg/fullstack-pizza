import { FC, type ReactElement } from "react"
import { TCartItem } from "../../types/api/cartTypes.ts"
import Button from "../Button/Button.tsx"
import { BASE_URL } from "../../baseUrl.ts"
import {
  useAddCartItemMutation,
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
} from "../../store/api/cartApi.ts"
import {
  CartItemCount,
  CartItemCountValue,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemStyle,
} from "./CartStyles.tsx"
import buttonStyle from "./buttonStyle.ts"

interface CartItemProps {
  item: TCartItem
}

const CartItem: FC<CartItemProps> = ({ item }): ReactElement => {
  const [addCartItem] = useAddCartItemMutation()
  const [updateCartItem] = useUpdateCartItemMutation()
  const [removeCartItem] = useRemoveCartItemMutation()

  const handleAdd = () => {
    addCartItem({ pizza: item.pizza.id })
  }

  const handleUpdate = () => {
    updateCartItem({ pizza: item.pizza.id, quantity: item.quantity + 1 })
  }

  const handleRemove = () => {
    removeCartItem({ pizza: item.pizza.id })
  }

  const baseImageUrl = BASE_URL.slice(0, -4) // TODO Костыль. С бекенда приходит кривая ссылка

  return (
    <CartItemStyle>
      <CartItemImage src={baseImageUrl + item.pizza.image} />
      <CartItemName>{item.pizza.name}</CartItemName>
      <CartItemCount>
        <Button onClick={handleUpdate} {...buttonStyle}>
          -
        </Button>
        <CartItemCountValue>{item.quantity}</CartItemCountValue>
        <Button onClick={handleAdd} {...buttonStyle}>
          +
        </Button>
      </CartItemCount>
      <CartItemPrice>
        <p>{item.pizza.price} ₽ шт.</p>
        <p>{parseFloat(item.pizza.price) * item.quantity} ₽</p>
      </CartItemPrice>
      <Button onClick={handleRemove} {...buttonStyle}>
        x
      </Button>
    </CartItemStyle>
  )
}

export default CartItem
