import { FC, type ReactElement } from "react"
import Button from "../../Button/Button.tsx"
import styled from "styled-components"
import { colors } from "../../../styles/theme.ts"

interface CategoryItemProps {
  category: string
  isActive?: boolean
}

const CategoryItemStyle = styled.li`
  list-style: none;
  font-weight: 400;
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
        hoverBgColor={colors.darkGrey}>
        {category}
      </Button>
    </CategoryItemStyle>
  )
}

export default CategoryItem
