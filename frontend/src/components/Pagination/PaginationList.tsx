import { type ReactElement } from "react"
import Button from "../Button/Button.tsx"
import styled from "styled-components"
import PaginationItem from "./PaginationItem.tsx"
import { colors, fontWeights } from "../../styles/theme.ts"

const PAGINATION_ITEMS = [2, 3, 4, 5, 6, 7, 8, 9, 10]

const PaginationListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  margin-bottom: 0;
`

const PaginationList = (): ReactElement => {
  return (
    <PaginationListStyle>
      <Button
        bgColor={colors.darkGrey}
        color={colors.white}
        hoverBgColor={colors.darkGrey}
        fontWeight={fontWeights.bold}>
        1
      </Button>
      {PAGINATION_ITEMS.map((page, index) => (
        <PaginationItem key={index} page={page} isActive={false} />
      ))}
    </PaginationListStyle>
  )
}

export default PaginationList
