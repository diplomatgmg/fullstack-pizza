import { type ReactElement } from "react"
import Sort from "./Sort/Sort.tsx"
import styled from "styled-components"
import Category from "./CategoryList/Category.tsx"

const FilterPanelStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FilterPanel = (): ReactElement => {
  return (
    <FilterPanelStyle>
      <Category />
      <Sort />
    </FilterPanelStyle>
  )
}

export default FilterPanel
