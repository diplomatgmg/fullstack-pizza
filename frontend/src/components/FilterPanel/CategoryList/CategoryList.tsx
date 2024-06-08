import { type ReactElement } from "react"
import styled from "styled-components"
import CategoryItem from "./CategoryItem.tsx"

const CATEGORIES = ["Мясные", "Вегетарианские", "Гриль", "Острые"]

const CategoryStyle = styled.ul`
  padding: 0;
  margin: 0 2rem 0 0;
  display: flex;
  gap: 1.5rem;
`

const CategoryList = (): ReactElement => {
  return (
    <CategoryStyle>
      <CategoryItem category={"Все"} isActive={true} />
      {CATEGORIES.map((category) => {
        return <CategoryItem category={category} key={category} />
      })}
    </CategoryStyle>
  )
}

export default CategoryList
