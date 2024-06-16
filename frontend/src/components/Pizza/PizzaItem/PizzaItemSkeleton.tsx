import { type ReactElement } from "react"
import styled from "styled-components"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Cart, Footer, Name, PizzaItemStyle, Price } from "./PizzaItemStyle.tsx"
import _ from "lodash"

export const ImageSkeleton = styled.div`
  margin-top: 1.25rem;
`

const NameSkeleton = styled(Name)`
  margin: 2rem 0 1rem;
`

const IngredientsSkeleton = styled.span`
  margin-top: 1rem;
  text-align: center;
`

const PriceSkeleton = styled(Price)`
  display: flex;
  gap: 1rem;
`

const PizzaItemSkeleton = (): ReactElement => {
  const randomRows = _.random(1, 10)
  const needSecondRow = randomRows > 3

  const firstRowWidth = _.random(80, 300)
  const secondRowWidth = _.random(firstRowWidth, 300)

  return (
    <PizzaItemStyle>
      <ImageSkeleton>
        <Skeleton height={210} width={210} circle={true} />
      </ImageSkeleton>
      <NameSkeleton>
        <Skeleton width={240} />
      </NameSkeleton>
      <IngredientsSkeleton>
        <Skeleton width={firstRowWidth} style={{ marginBottom: "0.5rem" }} />
        {needSecondRow && <Skeleton width={secondRowWidth} />}
      </IngredientsSkeleton>
      <Footer>
        <PriceSkeleton>
          <Skeleton width={110} height={24} />
        </PriceSkeleton>
        <Cart>
          <Skeleton height={40} width={130} borderRadius={"20px"} />
        </Cart>
      </Footer>
    </PizzaItemStyle>
  )
}

export default PizzaItemSkeleton
