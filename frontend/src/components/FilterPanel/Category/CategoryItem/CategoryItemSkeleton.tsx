import { type ReactElement } from "react"
import Skeleton from "react-loading-skeleton"
import { CategoryItemStyle } from "./CategoryItemStyle.tsx"
import _ from "lodash"

const CategoryItemSkeleton = (): ReactElement => {
  const randomWidth = _.random(90, 140)

  return (
    <CategoryItemStyle>
      <Skeleton height={40} width={randomWidth} borderRadius={"20px"} />
    </CategoryItemStyle>
  )
}

export default CategoryItemSkeleton
