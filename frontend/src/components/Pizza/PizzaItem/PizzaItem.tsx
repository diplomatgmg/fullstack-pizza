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
import useAuth from "../../../store/hooks/useAuth.ts"

interface PizzaItemProps {
  pizza: TPizza
}

const PizzaItem: FC<PizzaItemProps> = ({ pizza }): ReactElement => {
  const { isAuthenticated } = useAuth()
  const [addCartItem] = useAddCartItemMutation()

  const handleAddToCart = () => {
    addCartItem({ pizza: pizza.id })
  }

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
            onClick={handleAddToCart}
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
