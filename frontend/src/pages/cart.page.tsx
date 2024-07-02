import { type ReactElement } from "react"
import Container from "../components/Container/Container.tsx"
import Header from "../components/Header/Header.tsx"
import styled from "styled-components"
import { colors } from "../styles/theme.ts"
import Cart from "../components/Cart/Cart.tsx"

const CartStyle = styled.div`
  margin: 2rem;
  background-color: ${colors.white};
  border-radius: 2rem;
`

const CartPage = (): ReactElement => {
  return (
    <CartStyle>
      <Container>
        <Header />
      </Container>

      <Container>
        <Cart />
      </Container>
    </CartStyle>
  )
}

export default CartPage
