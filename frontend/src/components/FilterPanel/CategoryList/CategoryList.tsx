import { type ReactElement } from "react"
import styled from "styled-components"
import CategoryItem from "./CategoryItem.tsx"

const CATEGORIES = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Грибные"]

const CategoryStyle = styled.ul`
  margin: 0;
  padding: 0;
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
