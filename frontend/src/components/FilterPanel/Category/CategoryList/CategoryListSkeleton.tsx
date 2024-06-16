import { type ReactElement } from "react"
import CategoryItemSkeleton from "../CategoryItem/CategoryItemSkeleton.tsx"
import { CategoryStyle } from "./CategoryListStyle.tsx"
import _ from "lodash"

const CategoryListSkeleton = (): ReactElement => {
  const randomCountCategory = _.random(4, 7)

  return (
    <CategoryStyle>
      {_.range(randomCountCategory).map((index) => (
        <CategoryItemSkeleton key={index} />
      ))}
    </CategoryStyle>
  )
}

export default CategoryListSkeleton
