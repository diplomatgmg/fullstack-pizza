import { FC, type ReactElement } from "react"
import styled from "styled-components"
import CategoryItem from "./CategoryItem.tsx"
import _ from "lodash"
import { setCategory, setPage } from "../../../store/slice/searchParamsSlice.ts"
import { TCategory } from "../../../types/api/pizzaTypes.ts"
import useAppDispatch from "../../../store/hooks/useAppDispatch.ts"

interface CategoryListProps {
  categories: TCategory[]
}

const CategoryStyle = styled.ul`
  padding: 0.5rem 0;
  margin: 0 2rem 0 0;
  display: flex;
  gap: 1.5rem;
  max-width: 75vw;
  overflow: auto;
`

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
          name={_.capitalize(name)}
          onClick={handleChangeCategory}
        />
      ))}
    </CategoryStyle>
  )
}

export default CategoryList
