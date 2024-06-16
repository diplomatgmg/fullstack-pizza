import { type ReactElement } from "react"
import _ from "lodash"
import PaginationItemSkeleton from "../PaginationItem/PaginationItemSkeleton.tsx"
import { PaginationListStyle } from "./PaginationListStyle.tsx"

const PaginationListSkeleton = (): ReactElement => {
  const minPages = 3
  const maxPages = 7
  const randomPages =
    Math.floor(Math.random() * (maxPages - minPages + 1)) + minPages

  return (
    <PaginationListStyle>
      {_.range(randomPages).map((index) => (
        <PaginationItemSkeleton key={index} />
      ))}
    </PaginationListStyle>
  )
}

export default PaginationListSkeleton
