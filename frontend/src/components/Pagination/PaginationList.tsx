import { type ReactElement } from "react"
import styled from "styled-components"
import PaginationItem from "./PaginationItem.tsx"
import { setPage } from "../../store/slice/searchParamsSlice.ts"
import { useAppDispatch, useSearchParams } from "../../store/hooks.ts"
import { useGetPizzaQuery } from "../../store/api/pizzaApi.ts"

const PaginationListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  margin-bottom: 0;
`

const PaginationList = (): ReactElement => {
  const searchParams = useSearchParams()
  const { data } = useGetPizzaQuery(searchParams)

  const dispatch = useAppDispatch()

  const handleChangePage = (page: number): void => {
    dispatch(setPage(page))
  }

  return (
    <PaginationListStyle>
      {[...Array(data?.totalPages)].map((_, index) => (
        <PaginationItem
          key={index}
          page={index + 1}
          currentPage={searchParams.page}
          onClick={handleChangePage}
        />
      ))}
    </PaginationListStyle>
  )
}

export default PaginationList
