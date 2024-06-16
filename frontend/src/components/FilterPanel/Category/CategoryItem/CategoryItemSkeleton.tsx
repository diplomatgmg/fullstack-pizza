import { type ReactElement } from "react"
import Skeleton from "react-loading-skeleton"

const CategoryItemSkeleton = (): ReactElement => {
  const minWidth = 90
  const maxWidth = 140
  const randomWidth =
    Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth

  return <Skeleton height={40} width={randomWidth} borderRadius={"20px"} />
}

export default CategoryItemSkeleton
