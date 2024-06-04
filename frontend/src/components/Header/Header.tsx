import { type ReactElement } from "react"
import styled from "styled-components"
import Logo from "./Logo.tsx"
import AuthButton from "./AuthButton/AuthButton.tsx"
import CartInfo from "./CartInfo.tsx"

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
