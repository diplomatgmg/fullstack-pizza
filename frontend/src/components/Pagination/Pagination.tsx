import { type ReactElement } from "react"
import { useSearchParams } from "../../store/hooks.ts"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PaginationList from "./PaginationList.tsx"

const Pagination = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading } = useGetPizzaQuery(searchParams)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <PaginationList totalPages={data?.totalPages || 0} />
}

export default Pagination
