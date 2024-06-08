import { type FC, type ReactElement } from "react"
import Button from "../Button/Button.tsx"
import { colors, fontWeights } from "../../styles/theme.ts"

interface PaginationItemProps {
  page: number
  isActive: boolean
}

const PaginationItem: FC<PaginationItemProps> = ({
  page,
  isActive,
}): ReactElement => {
  return (
    <Button
      bgColor={isActive ? colors.darkGrey : colors.lightGraySecondary}
      color={isActive ? colors.white : colors.black}
      hoverBgColor={colors.darkGrey}
      fontWeight={isActive ? fontWeights.bold : fontWeights.regular}>
      {page}
    </Button>
  )
}

export default PaginationItem
