import { FC, type ReactElement } from "react"
import CategoryItem from "../CategoryItem/CategoryItem.tsx"
import capitalize from "lodash/capitalize"
import {
  setCategory,
  setPage,
} from "../../../../store/slice/searchParamsSlice.ts"
import { TCategory } from "../../../../types/api/pizzaTypes.ts"
import useAppDispatch from "../../../../store/hooks/useAppDispatch.ts"
import { CategoryStyle } from "./CategoryListStyle.tsx"

interface CategoryListProps {
  categories: TCategory[]
}

const CategoryList: FC<CategoryListProps> = ({ categories }): ReactElement => {
  const dispatch = useAppDispatch()

  const handleChangeCategory = (category: string): void => {
    dispatch(setCategory(category))
    dispatch(setPage(1))
  }

  return (
    <CategoryStyle>
      {categories.map(({ id, name }) => (
        <CategoryItem
          key={id}
          name={capitalize(name)}
          onClick={handleChangeCategory}
        />
      ))}
    </CategoryStyle>
  )
}

export default CategoryList
