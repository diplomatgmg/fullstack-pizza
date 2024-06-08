import { type FC, type ReactElement } from "react"
import Button from "../Button/Button.tsx"
import { colors, fontWeights } from "../../styles/theme.ts"
import styled from "styled-components"

interface PaginationItemProps {
  page: number
  currentPage: number
  onClick: (newPage: number) => void
}

const PaginationItemStyle = styled.li`
  list-style: none;
`

const PaginationItem: FC<PaginationItemProps> = ({
  page,
  currentPage,
  onClick,
}): ReactElement => {
  const isActive = page === currentPage

  return (
    <PaginationItemStyle onClick={() => onClick(page)}>
      <Button
        bgColor={isActive ? colors.darkGrey : colors.lightGraySecondary}
        color={isActive ? colors.white : colors.black}
        hoverBgColor={colors.darkGrey}
        fontWeight={isActive ? fontWeights.bold : fontWeights.regular}>
        {page}
      </Button>
    </PaginationItemStyle>
  )
}

export default PaginationItem
