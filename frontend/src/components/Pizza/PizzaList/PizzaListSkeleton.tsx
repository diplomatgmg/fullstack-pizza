import range from "lodash/range"
import PizzaItemSkeleton from "../PizzaItem/PizzaItemSkeleton.tsx"
import { ReactElement } from "react"
import { PizzaListStyle } from "./PizzaListStyle.tsx"

const PizzaListSkeleton = (): ReactElement => {
  const pizzasPerPage = 4

  return (
    <PizzaListStyle>
      {range(pizzasPerPage).map((index) => (
        <PizzaItemSkeleton key={index} />
      ))}
    </PizzaListStyle>
  )
}

export default PizzaListSkeleton
