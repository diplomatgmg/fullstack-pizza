import { type ReactElement, useMemo } from "react"
import CategoryItemSkeleton from "../CategoryItem/CategoryItemSkeleton.tsx"
import { CategoryStyle } from "./CategoryListStyle.tsx"
import _ from "lodash"

const CategoryListSkeleton = (): ReactElement => {
  const randomCategoryCount = useMemo(() => _.random(4, 7), [])

  return (
    <CategoryStyle>
      {_.range(randomCategoryCount).map((index) => (
        <CategoryItemSkeleton key={index} />
      ))}
    </CategoryStyle>
  )
}

export default CategoryListSkeleton
