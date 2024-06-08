import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PizzaItem from "./PizzaItem.tsx"
import styled from "styled-components"

const PizzaListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  justify-items: center;
  gap: 30px;
`

const PizzaList = (): ReactElement => {
  const { data: pizzas, isError } = useGetPizzaQuery()

  if (isError) {
    return <h1>error</h1>
  }

  return (
    <PizzaListStyle>
      {pizzas
        ?.slice(0, 4)
        .map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)}
    </PizzaListStyle>
  )
}

export default PizzaList
