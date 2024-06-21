import { type FC, type ReactElement } from "react"
import Button from "../../Button/Button.tsx"
import { colors, fontWeights } from "../../../styles/theme.ts"
import { PaginationItemStyle } from "./PaginationItemStyle.tsx"

interface PaginationItemProps {
  page: number
  currentPage: number
  onClick: (newPage: number) => void
  isFetching: boolean
}

const PaginationItem: FC<PaginationItemProps> = ({
  page,
  currentPage,
  onClick,
  isFetching,
}): ReactElement => {
  const isActive = page === currentPage

  return (
    <PaginationItemStyle onClick={() => onClick(page)}>
      <Button
        bgColor={isActive ? colors.darkGrey : colors.lightGraySecondary}
        color={isActive ? colors.white : colors.black}
        hoverBgColor={colors.darkGrey}
        fontWeight={isActive ? fontWeights.bold : fontWeights.regular}
        disabled={isFetching}>
        {page}
      </Button>
    </PaginationItemStyle>
  )
}

export default PaginationItem
