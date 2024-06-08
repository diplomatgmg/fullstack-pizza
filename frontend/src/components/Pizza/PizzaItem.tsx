import { type FC, type ReactElement } from "react"
import { TPizza } from "../../types/pizzaTypes.ts"
import Button from "../Button/Button.tsx"
import styled from "styled-components"
import { colors } from "../../styles/theme.ts"

interface PizzaItemProps {
  pizza: TPizza
}

const PizzaItemStyle = styled.div`
  height: 490px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  border-radius: 1rem;
`

const Image = styled.img`
  margin-top: 1rem;
  margin-left: 1rem;
  user-select: none;
`

const Name = styled.h2`
  font-size: 1.75rem;
  margin: 1rem 0;
  text-align: center;
`

const Ingredients = styled.p`
  font-size: 0.9rem;
  text-align: center;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  margin-top: auto;
  gap: 1rem;
`

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;

  white-space: nowrap;
`

const Cart = styled.div`
  white-space: nowrap;
`

const PizzaItem: FC<PizzaItemProps> = ({ pizza }): ReactElement => {
  return (
    <PizzaItemStyle>
      <Image src={pizza.image} alt={pizza.name} />
      <Name>{pizza.name}</Name>
      <Ingredients>
        {pizza.ingredients.map((ingredient) => ingredient.name).join(", ")}
      </Ingredients>
      <Footer>
        <Price>от {pizza.price} ₽</Price>
        <Cart>
          <Button
            bgColor={colors.white}
            borderColor={colors.orange}
            color={colors.orange}>
            В корзину
          </Button>
        </Cart>
      </Footer>
    </PizzaItemStyle>
  )
}

export default PizzaItem
