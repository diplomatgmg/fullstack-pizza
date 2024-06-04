import { type ReactElement } from "react"
import CategoryList from "./CategoryList/CategoryList.tsx"

const FilterPanel = (): ReactElement => {
  return (
    <div>
      <CategoryList />
      {/*<Sort />*/}
    </div>
  )
}

export default FilterPanel
