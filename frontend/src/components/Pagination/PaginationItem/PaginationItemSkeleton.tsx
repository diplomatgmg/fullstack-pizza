import { type ReactElement } from "react"
import Skeleton from "react-loading-skeleton"
import { PaginationItemStyle } from "./PaginationItemStyle.tsx"

const PaginationItemSkeleton = (): ReactElement => {
  return (
    <PaginationItemStyle>
      <Skeleton width={60} height={40} borderRadius={"20px"} />
    </PaginationItemStyle>
  )
}

export default PaginationItemSkeleton
