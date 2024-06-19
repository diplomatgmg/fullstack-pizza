import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PizzaList from "./PizzaList/PizzaList.tsx"
import useSearchParams from "../../store/hooks/useSearchParams.ts"
import PizzaListSkeleton from "./PizzaList/PizzaListSkeleton.tsx"
import FullScreenError from "../FullScreenError/FullScreenError.tsx"

const Pizza = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading, isFetching, isError } =
    useGetPizzaQuery(searchParams)

  if (isLoading || isFetching) return <PizzaListSkeleton />

  if (isError) {
    return (
      <>
        <PizzaListSkeleton />
        <FullScreenError
          title={"FATAL ERROR"}
          description={"Не удалось установить связь с сервером."}
        />
      </>
    )
  }

  return <PizzaList pizzas={data?.results || []} />
}

export default Pizza
