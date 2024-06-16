import _ from "lodash"
import PizzaItemSkeleton from "../PizzaItem/PizzaItemSkeleton.tsx"
import { ReactElement } from "react"
import { PizzaListStyle } from "./PizzaListStyle.tsx"

const PizzaListSkeleton = (): ReactElement => {
  return (
    <PizzaListStyle>
      {_.range(4).map((index) => (
        <PizzaItemSkeleton key={index} />
      ))}
    </PizzaListStyle>
  )
}

export default PizzaListSkeleton
