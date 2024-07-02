import { FC, type ReactElement } from "react"
import { TCartItem } from "../../types/api/cartTypes.ts"
import CartItem from "./CartItem.tsx"
import styled from "styled-components"

interface CartListProps {
  items: TCartItem[]
}

const CartListStyle = styled.div`
  margin: 2rem 0 0;
`

const CartList: FC<CartListProps> = ({ items }): ReactElement => {
  return (
    <CartListStyle>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </CartListStyle>
  )
}

export default CartList
