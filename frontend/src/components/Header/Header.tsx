import { type ReactElement } from "react"
import styled from "styled-components"
import Logo from "./Logo.tsx"
import AuthButton from "./AuthButton/AuthButton.tsx"
import CartInfo from "./CartInfo.tsx"
import { colors } from "../../styles/theme.ts"

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${colors.lightGray};
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
