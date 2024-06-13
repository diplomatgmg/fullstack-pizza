import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PaginationList from "./PaginationList.tsx"
import useSearchParams from "../../store/hooks/useSearchParams.ts"

const Pagination = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading } = useGetPizzaQuery(searchParams)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  const totalPages = data?.totalPages || 0

  return (
    <PaginationList
      totalPages={totalPages}
      shouldShowPagination={totalPages > 1}
    />
  )
}

export default Pagination
