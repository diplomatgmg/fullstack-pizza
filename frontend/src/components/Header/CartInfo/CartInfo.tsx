import { type ReactElement } from "react"
import styled from "styled-components"
import CartIcon from "/svg/cart.svg"
import Img from "../../Img/Img.tsx"
import Button from "../../Button/Button.tsx"
import Delimiter from "../../Button/Delimiter.tsx"

const CartInfoStyle = styled.div`
  margin-left: auto;
  margin-right: 1.5rem;
  white-space: nowrap;
`

const CartInfo = (): ReactElement => {
  return (
    <CartInfoStyle>
      <Button disabled>
        <span>0 ₽</span>
        <Delimiter />
        <Img src={CartIcon} scale={"0.75"} />
        <span>0</span>
      </Button>
    </CartInfoStyle>
  )
}

export default CartInfo
