import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import { useSearchParams } from "../../store/hooks.ts"
import PizzaList from "./PizzaList.tsx"

const Pizza = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading } = useGetPizzaQuery(searchParams)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <PizzaList pizzas={data?.results || []} />
}

export default Pizza
