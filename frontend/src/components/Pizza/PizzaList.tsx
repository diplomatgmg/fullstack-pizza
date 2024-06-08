import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PizzaItem from "./PizzaItem.tsx"
import styled from "styled-components"

const PizzaListStyle = styled.ul`
  display: grid;
  padding: 0;

  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
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
