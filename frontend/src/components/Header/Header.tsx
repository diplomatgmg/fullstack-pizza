import { type ReactElement } from "react"
import styled from "styled-components"
import Logo from "./Logo.tsx"

const HeaderStyle = styled.div``

const Header = (): ReactElement => {
  return (
    <HeaderStyle>
      <Logo />
    </HeaderStyle>
  )
}

export default Header
