import { type ReactElement, useMemo } from "react"
import PaginationItemSkeleton from "../PaginationItem/PaginationItemSkeleton.tsx"
import { PaginationListStyle } from "./PaginationListStyle.tsx"
import _ from "lodash"

const PaginationListSkeleton = (): ReactElement => {
  const randomPageCount = useMemo(() => _.random(3, 7), [])

  return (
    <PaginationListStyle>
      {_.range(randomPageCount).map((index) => (
        <PaginationItemSkeleton key={index} />
      ))}
    </PaginationListStyle>
  )
}

export default PaginationListSkeleton
