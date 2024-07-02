import { type FC, type ReactElement } from "react"
import { TPizza } from "../../../types/api/pizzaTypes.ts"
import Button from "../../Button/Button.tsx"
import { colors } from "../../../styles/theme.ts"
import {
  Cart,
  Footer,
  Image,
  Ingredients,
  Name,
  PizzaItemStyle,
  Price,
} from "./PizzaItemStyle.tsx"
import { useAddCartItemMutation } from "../../../store/api/cartApi.ts"

interface PizzaItemProps {
  pizza: TPizza
}

const PizzaItem: FC<PizzaItemProps> = ({ pizza }): ReactElement => {
  const { token } = useAuth()

  const isAuthenticated = token.access !== null

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
            disabled={!isAuthenticated}
            borderColor={isAuthenticated ? colors.orange : colors.white}
            bgColor={isAuthenticated ? colors.white : colors.orange}
            color={isAuthenticated ? colors.orange : colors.white}>
            В корзину
          </Button>
        </Cart>
      </Footer>
    </PizzaItemStyle>
  )
}

export default PizzaItem
