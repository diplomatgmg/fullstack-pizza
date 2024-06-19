import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PizzaList from "./PizzaList/PizzaList.tsx"
import useSearchParams from "../../store/hooks/useSearchParams.ts"
import PizzaListSkeleton from "./PizzaList/PizzaListSkeleton.tsx"

const Pizza = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading, isFetching } = useGetPizzaQuery(searchParams)

  if (isLoading || isFetching) return <PizzaListSkeleton />

  return <PizzaList pizzas={data?.results || []} />
}

export default Pizza
