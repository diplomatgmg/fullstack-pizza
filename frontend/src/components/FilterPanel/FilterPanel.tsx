import { type ReactElement } from "react"
import CategoryList from "./CategoryList/CategoryList.tsx"
import Sort from "./Sort/Sort.tsx"
import styled from "styled-components"

const FilterPanelStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FilterPanel = (): ReactElement => {
  return (
    <FilterPanelStyle>
      <CategoryList />
      <Sort />
    </FilterPanelStyle>
  )
}

export default FilterPanel
