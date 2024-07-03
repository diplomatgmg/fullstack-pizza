import { type ReactElement } from "react"
import {
  useFetchCartQuery,
  useRemoveCartItemMutation,
} from "../../store/api/cartApi.ts"
import useAuth from "../../store/hooks/useAuth.ts"
import CartList from "./CartList.tsx"
import Button from "../Button/Button.tsx"
import Img from "../Img/Img.tsx"
import CartIcon from "/svg/cart.svg"
import {
  CartClearStyle,
  CartHeaderStyle,
  CartHeaderTitleStyle,
  CartIconStyle,
  CartStyle,
  CartTextStyle,
  CartTitleStyle,
} from "./CartStyles.tsx"
import buttonStyle from "./buttonStyle.ts"

const Cart = (): ReactElement => {
  const { isAuthenticated } = useAuth()
  const { data } = useFetchCartQuery(undefined, { skip: !isAuthenticated })
  const [removeCartItem] = useRemoveCartItemMutation()

  const handleClearCart = () => {
    removeCartItem({ pizza: "all" })
  }

  if (!isAuthenticated) {
    return (
      <h3 style={{ textAlign: "center", fontSize: "2rem", margin: "5rem 0" }}>
        Необходимо авторизоваться!
      </h3>
    )
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
          <Button onClick={handleClearCart} {...buttonStyle}>
            x
          </Button>
          <CartTextStyle>Очистить корзину</CartTextStyle>
        </CartClearStyle>
      </CartHeaderStyle>
      <CartList items={data?.items ?? []} />
    </CartStyle>
  )
}

export default Cart
