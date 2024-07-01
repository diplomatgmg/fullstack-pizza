import { type ReactElement, useMemo } from "react"
import PaginationItemSkeleton from "../PaginationItem/PaginationItemSkeleton.tsx"
import { PaginationListStyle } from "./PaginationListStyle.tsx"
import random from "lodash/random"
import range from "lodash/range"

const PaginationListSkeleton = (): ReactElement => {
  const randomPageCount = useMemo(() => random(3, 7), [])

  return (
    <PaginationListStyle>
      {range(randomPageCount).map((index) => (
        <PaginationItemSkeleton key={index} />
      ))}
    </PaginationListStyle>
  )
}

export default PaginationListSkeleton
