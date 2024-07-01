import { type ReactElement, useMemo } from "react"
import CategoryItemSkeleton from "../CategoryItem/CategoryItemSkeleton.tsx"
import { CategoryStyle } from "./CategoryListStyle.tsx"
import random from "lodash/random"
import range from "lodash/range"

const CategoryListSkeleton = (): ReactElement => {
  const randomCategoryCount = useMemo(() => random(4, 7), [])

  return (
    <CategoryStyle>
      {range(randomCategoryCount).map((index) => (
        <CategoryItemSkeleton key={index} />
      ))}
    </CategoryStyle>
  )
}

export default CategoryListSkeleton
