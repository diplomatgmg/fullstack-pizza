import { type ReactElement } from "react"
import styled from "styled-components"
import CartIcon from "/svg/cart.svg"
import Img from "../../Img/Img.tsx"
import Button from "../../Button/Button.tsx"
import Delimiter from "../../Button/Delimiter.tsx"
import { useFetchCartQuery } from "../../../store/api/cartApi.ts"
import useAuth from "../../../store/hooks/useAuth.ts"
import getCartSum from "../../../utils/getCartSum.ts"
import getCartCount from "../../../utils/getCartCount.ts"

const CartInfoStyle = styled.div`
  margin-left: auto;
  margin-right: 1.5rem;
  white-space: nowrap;
`

const CartInfo = (): ReactElement => {
  const { isAuthenticated } = useAuth()
  const { data } = useFetchCartQuery(undefined, { skip: !isAuthenticated })

  const cartSum = getCartSum(data ?? null)
  const cartCount = getCartCount(data ?? null)

  if (!isAuthenticated) {
    return (
      <CartInfoStyle>
        <Button disabled>
          <span>Не авторизован</span>
          <Delimiter />
          <Img src={CartIcon} scale={"0.75"} />
        </Button>
      </CartInfoStyle>
    )
  }

  return (
    <CartInfoStyle>
      <Button>
        <span>{cartSum} ₽</span>
        <Delimiter />
        <Img src={CartIcon} scale={"0.75"} />
        <span>{cartCount}</span>
      </Button>
    </CartInfoStyle>
  )
}

export default CartInfo
