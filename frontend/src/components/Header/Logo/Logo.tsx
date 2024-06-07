import { type ReactElement } from "react"
import styled from "styled-components"
import PizzaLogo from "/pizza.svg"
import { fontWeights, colors } from "../../styles/theme.ts"

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`

const LogoLink = styled.a`
  display: flex;
  text-decoration: none;
`

const LogoImage = styled.img.attrs({ alt: "Pizza Logo" })`
  margin-right: 8px;
  height: 3rem;
`

const Title = styled.h1`
  color: ${colors.black};
  font-weight: ${fontWeights.bold};
  text-transform: uppercase;
  font-size: 2rem;
  margin: 0;
  line-height: 1;
`

const Description = styled.p`
  font-family: Nunito, sans-serif;
  font-weight: ${fontWeights.regular};
  font-size: 0.9rem;
  color: ${colors.grey};
  margin: 0;
`

const Logo = (): ReactElement => {
  return (
    <LogoStyle>
      <LogoLink href="#">
        <LogoImage src={PizzaLogo} />
        <div>
          <Title>React Pizza</Title>
          <Description>самая вкусная пицца во Вселенной</Description>
        </div>
      </LogoLink>
    </LogoStyle>
  )
}

export default Logo
