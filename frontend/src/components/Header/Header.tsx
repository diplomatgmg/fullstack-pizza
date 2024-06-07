import { type ReactElement } from "react"
import styled from "styled-components"
import AuthButton from "./AuthButton/AuthButton.tsx"
import Logo from "./Logo/Logo.tsx"
import CartInfo from "./CartInfo/CartInfo.tsx"

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
`

const Header = (): ReactElement => {
  return (
    <HeaderStyle>
      <Logo />
      {/*<Search/>*/}
      <CartInfo />
      <AuthButton />
    </HeaderStyle>
  )
}

export default Header
