import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PizzaItem from "./PizzaItem.tsx"
import styled from "styled-components"
import { useSearchParams } from "../../store/hooks.ts"

const PizzaListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  justify-items: center;
  gap: 30px;
`

const PizzaList = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data } = useGetPizzaQuery(searchParams)

  return (
    <PizzaListStyle>
      {data?.results.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)}
    </PizzaListStyle>
  )
}

export default PizzaList
