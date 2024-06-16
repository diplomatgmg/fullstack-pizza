import { type FC, type ReactElement } from "react"
import { TPizza } from "../../../types/api/pizzaTypes.ts"
import Button from "../../Button/Button.tsx"
import { colors } from "../../../styles/theme.ts"
import PizzaItemSkeleton from "./PizzaItemSkeleton.tsx"
import {
  Cart,
  Footer,
  Image,
  Ingredients,
  Name,
  PizzaItemStyle,
  Price,
} from "./PizzaItemStyles.tsx"

interface PizzaItemBaseProps {
  isLoading?: boolean
  pizza?: TPizza
}

interface WithLoading extends PizzaItemBaseProps {
  isLoading: true
  pizza?: never
}

interface WithPizza extends PizzaItemBaseProps {
  isLoading?: never
  pizza: TPizza
}

type PizzaItemProps = WithLoading | WithPizza

const PizzaItem: FC<PizzaItemProps> = ({ pizza, isLoading }): ReactElement => {
  if (isLoading) {
    return <PizzaItemSkeleton />
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
