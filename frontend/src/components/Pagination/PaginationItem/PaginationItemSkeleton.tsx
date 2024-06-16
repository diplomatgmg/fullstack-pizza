import { type ReactElement } from "react"
import Skeleton from "react-loading-skeleton"

const PaginationItemSkeleton = (): ReactElement => {
  return <Skeleton width={60} height={40} borderRadius={"20px"} />
}

export default PaginationItemSkeleton
