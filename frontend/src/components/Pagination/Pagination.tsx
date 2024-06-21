import { type ReactElement } from "react"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"
import PaginationList from "./PaginationList/PaginationList.tsx"
import useSearchParams from "../../store/hooks/useSearchParams.ts"
import PaginationListSkeleton from "./PaginationList/PaginationListSkeleton.tsx"

const Pagination = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data, isLoading, isFetching } = useGetPizzaQuery(searchParams)

  const totalPages = data?.totalPages || 0

  if (isLoading) return <PaginationListSkeleton />

  return <PaginationList totalPages={totalPages} isFetching={isFetching} />
}

export default Pagination
