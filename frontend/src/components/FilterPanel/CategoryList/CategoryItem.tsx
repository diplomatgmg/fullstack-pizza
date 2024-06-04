import { FC, type ReactElement } from "react"
import Button from "../../Button/Button.tsx"
import styled from "styled-components"
import { colors, fontWeights } from "../../../styles/theme.ts"

interface CategoryItemProps {
  category: string
  isActive?: boolean
}

const CategoryItemStyle = styled.li`
  list-style: none;
  font-weight: ${fontWeights.regular};
`

const CategoryItem: FC<CategoryItemProps> = ({
  category,
  isActive,
}): ReactElement => {
  return (
    <CategoryItemStyle>
      <Button
        bgColor={isActive ? colors.darkGrey : colors.lightGraySecondary}
        color={isActive ? colors.white : colors.black}
        hoverBgColor={colors.darkGrey}
        fontWeight={isActive ? fontWeights.bold : fontWeights.regular}>
        {category}
      </Button>
    </CategoryItemStyle>
  )
}

export default CategoryItem
