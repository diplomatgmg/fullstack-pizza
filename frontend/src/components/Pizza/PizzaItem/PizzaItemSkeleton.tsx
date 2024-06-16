import { type ReactElement } from "react"
import styled from "styled-components"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import {
  Cart,
  Footer,
  Name,
  PizzaItemStyle,
  Price,
} from "./PizzaItemStyles.tsx"

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
  return (
    <PizzaItemStyle>
      <ImageSkeleton>
        <Skeleton height={210} width={210} circle={true} />
      </ImageSkeleton>
      <NameSkeleton>
        <Skeleton width={240} />
      </NameSkeleton>
      <IngredientsSkeleton>
        <Skeleton width={300} style={{ marginBottom: "0.5rem" }} />
        <Skeleton width={240} />
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
