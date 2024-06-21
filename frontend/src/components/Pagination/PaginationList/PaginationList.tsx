import { FC, type ReactElement } from "react"
import PaginationItem from "../PaginationItem/PaginationItem.tsx"
import { setPage } from "../../../store/slice/searchParamsSlice.ts"
import { TPizzaQueryResult } from "../../../types/api/responseTypes.ts"
import _ from "lodash"
import useSearchParams from "../../../store/hooks/useSearchParams.ts"
import useAppDispatch from "../../../store/hooks/useAppDispatch.ts"
import { PaginationListStyle } from "./PaginationListStyle.tsx"

interface PaginationListProps {
  totalPages: TPizzaQueryResult["totalPages"]
  isFetching: boolean
}

const PaginationList: FC<PaginationListProps> = ({
  totalPages,
  isFetching,
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
          isFetching={isFetching}
        />
      ))}
    </PaginationListStyle>
  )
}

export default PaginationList
