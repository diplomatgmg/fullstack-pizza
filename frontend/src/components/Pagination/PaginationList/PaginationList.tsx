import { FC, type ReactElement } from "react"
import styled from "styled-components"
import PaginationItem from "../PaginationItem/PaginationItem.tsx"
import { setPage } from "../../../store/slice/searchParamsSlice.ts"
import { TPizzaQueryResult } from "../../../types/api/responseTypes.ts"
import _ from "lodash"
import useSearchParams from "../../../store/hooks/useSearchParams.ts"
import useAppDispatch from "../../../store/hooks/useAppDispatch.ts"

interface PaginationListProps {
  totalPages: TPizzaQueryResult["totalPages"]
}

const PaginationListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0;
`

const PaginationList: FC<PaginationListProps> = ({
  totalPages,
}): ReactElement | null => {
  const { page } = useSearchParams()
  const dispatch = useAppDispatch()

  const handleChangePage = (page: number): void => {
    dispatch(setPage(page))
  }

  return (
    <PaginationListStyle>
      {_.range(totalPages).map((_, index) => (
        <PaginationItem
          key={index}
          page={index + 1}
          currentPage={page}
          onClick={handleChangePage}
        />
      ))}
    </PaginationListStyle>
  )
}

export default PaginationList
