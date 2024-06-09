import { type ReactElement } from "react"
import styled from "styled-components"
import CategoryItem from "./CategoryItem.tsx"
import { useGetCategoriesQuery } from "../../../store/api/pizzaApi.ts"
import _ from "lodash"
import { useAppDispatch } from "../../../store/hooks.ts"
import { setCategory, setPage } from "../../../store/slice/searchParamsSlice.ts"

const CategoryStyle = styled.ul`
  padding: 0.5rem 0;
  margin: 0 2rem 0 0;
  display: flex;
  gap: 1.5rem;
  max-width: 75vw;
  overflow: auto;
`

const CategoryList = (): ReactElement => {
  const { data } = useGetCategoriesQuery()
  const dispatch = useAppDispatch()

  const handleChangeCategory = (category: string): void => {
    dispatch(setCategory(category))
    dispatch(setPage(1))
  }

  return (
    <CategoryStyle>
      {data?.map(({ id, name }) => {
        return (
          <CategoryItem
            key={id}
            name={_.capitalize(name)}
            onClick={handleChangeCategory}
          />
        )
      })}
    </CategoryStyle>
  )
}

export default CategoryList
