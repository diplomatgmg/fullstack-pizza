import { FC, type ReactElement } from "react"
import PizzaItem from "../PizzaItem/PizzaItem.tsx"
import { TPizza } from "../../../types/api/pizzaTypes.ts"
import { PizzaListStyle } from "./PizzaListStyle.tsx"

interface PizzaListProps {
  pizzas: TPizza[]
}

const PizzaList: FC<PizzaListProps> = ({ pizzas }): ReactElement => {
  return (
    <PizzaListStyle>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </PizzaListStyle>
  )
}

export default PizzaList
