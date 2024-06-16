import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PaginationList from "./PaginationList.tsx"
import useSearchParams from "../../store/hooks/useSearchParams.ts"

const Pagination = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading, isFetching } = useGetPizzaQuery(searchParams)

  const totalPages = data?.totalPages || 0

  return (
    <PaginationList
      totalPages={totalPages}
      shouldShowPagination={totalPages > 1}
      isLoading={isLoading || isFetching}
    />
  )
}

export default Pagination
