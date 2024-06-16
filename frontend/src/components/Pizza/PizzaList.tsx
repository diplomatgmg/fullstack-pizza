import { FC, type ReactElement } from "react"
import PizzaItem from "./PizzaItem/PizzaItem.tsx"
import styled from "styled-components"
import { TPizza } from "../../types/api/pizzaTypes.ts"
import _ from "lodash"

interface PizzaListProps {
  pizzas: TPizza[]
  isLoading: boolean
}

const PizzaListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  justify-items: center;
  gap: 30px;
`

const PizzaList: FC<PizzaListProps> = ({ pizzas, isLoading }): ReactElement => {
  if (isLoading) {
    return (
      <PizzaListStyle>
        {_.range(4).map((index) => (
          <PizzaItem key={index} isLoading={isLoading} />
        ))}
      </PizzaListStyle>
    )
  }

  return (
    <PizzaListStyle>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </PizzaListStyle>
  )
}

export default PizzaList
