import { FC, type ReactElement } from "react"
import { TCartItem } from "../../types/api/cartTypes.ts"
import styled from "styled-components"
import Button from "../Button/Button.tsx"
import { BASE_URL } from "../../baseUrl.ts"

interface CartItemProps {
  item: TCartItem
}

const CartItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`

const CartItemImage = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 24px;
`

const CartItemName = styled.h3`
  display: flex;
  align-items: center;
  width: 50%;
  font-size: 1.5rem;
`

const CartItemCount = styled.div`
  display: flex;
  align-items: center;
`

const CartItemCountValue = styled.div`
  font-size: 22px;
  font-weight: bold;

  margin: 0 12px;
`

const CartItemPrice = styled.div`
  font-size: 22px;
  font-weight: bold;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 20%;

  white-space: nowrap;

  p {
    margin: 0;
  }

  p:first-of-type {
    font-size: 12px;
    margin-bottom: 0.5rem;

    color: #7b7b7b;
  }
`

const CartItem: FC<CartItemProps> = ({ item }): ReactElement => {
  const baseImageUrl = BASE_URL.slice(0, -4) // TODO Костыль. С бекенда приходит кривая ссылка

  return (
    <CartItemStyle>
      <CartItemImage src={baseImageUrl + item.pizza.image} />
      <CartItemName>{item.pizza.name}</CartItemName>
      <CartItemCount>
        <Button>-</Button>
        <CartItemCountValue>{item.quantity}</CartItemCountValue>
        <Button>+</Button>
      </CartItemCount>
      <CartItemPrice>
        <p>{item.pizza.price} ₽ шт.</p>
        <p>{parseFloat(item.pizza.price) * item.quantity} ₽</p>
      </CartItemPrice>
      <Button>x</Button>
    </CartItemStyle>
  )
}

export default CartItem
