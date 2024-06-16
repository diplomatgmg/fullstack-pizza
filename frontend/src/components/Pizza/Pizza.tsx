import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PizzaList from "./PizzaList.tsx"
import useSearchParams from "../../store/hooks/useSearchParams.ts"

const Pizza = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading, isFetching } = useGetPizzaQuery(searchParams)

  return (
    <PizzaList
      pizzas={data?.results || []}
      isLoading={isLoading || isFetching}
    />
  )
}

export default Pizza
