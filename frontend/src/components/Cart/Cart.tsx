import { type ReactElement } from "react"
import styled from "styled-components"
import {
  useFetchCartQuery,
  useRemoveCartItemMutation,
} from "../../store/api/cartApi.ts"
import useAuth from "../../store/hooks/useAuth.ts"
import CartList from "./CartList.tsx"
import Button from "../Button/Button.tsx"
import Img from "../Img/Img.tsx"
import CartIcon from "/svg/cart.svg"

const CartStyle = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 1rem auto;
`

const CartHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`

const CartHeaderTitleStyle = styled.div`
  display: flex;
  align-items: center;
`

const CartTitleStyle = styled.h2`
  font-size: 32px;
  margin: 0;

  display: flex;
  align-items: center;

  svg {
    width: 30px;
    margin-right: 10px;
  }
`

const CartIconStyle = styled.div`
  filter: brightness(0);
  margin-right: 1rem;
`

const CartClearStyle = styled.div`
  display: flex;
  align-items: center;

  transition: background-color linear 100ms;
  white-space: nowrap;
`

const CartTextStyle = styled.p`
  margin-left: 1rem;
  color: #b6b6b6;
`

const Cart = (): ReactElement => {
  const { isAuthenticated } = useAuth()
  const { data } = useFetchCartQuery(undefined, { skip: !isAuthenticated })
  const [removeCartItem] = useRemoveCartItemMutation()

  const handleClearCart = () => {
    removeCartItem({ pizza: "all" })
  }

  return (
    <CartStyle>
      <CartHeaderStyle>
        <CartHeaderTitleStyle>
          <CartIconStyle>
            <Img src={CartIcon} scale={"1.75"} />
          </CartIconStyle>
          <CartTitleStyle>Корзина</CartTitleStyle>
        </CartHeaderTitleStyle>

        <CartClearStyle>
          <Button onClick={handleClearCart}>x</Button>
          <CartTextStyle>Очистить корзину</CartTextStyle>
        </CartClearStyle>
      </CartHeaderStyle>

      <CartList items={data?.items ?? []} />
    </CartStyle>
  )
}

export default Cart
