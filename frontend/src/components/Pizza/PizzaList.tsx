import { FC, type ReactElement } from "react"
import PizzaItem from "./PizzaItem.tsx"
import styled from "styled-components"
import { TPizza } from "../../types/pizzaTypes.ts"

interface PizzaListProps {
  pizzas: TPizza[]
}

const PizzaListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  justify-items: center;
  gap: 30px;
`

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
