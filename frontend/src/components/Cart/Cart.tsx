import { type ReactElement } from "react"
import styled from "styled-components"
import { useFetchCartQuery } from "../../store/api/cartApi.ts"
import useAuth from "../../store/hooks/useAuth.ts"
import CartList from "./CartList.tsx"

const CartStyle = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 90px auto;
`

const CartHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

const Cart = (): ReactElement => {
  const { isAuthenticated } = useAuth()
  const { data } = useFetchCartQuery(undefined, { skip: !isAuthenticated })
  console.log(data)

  return (
    <CartStyle>
      <CartHeaderStyle />
      <CartList items={data?.items ?? []} />
    </CartStyle>
  )
}

export default Cart
