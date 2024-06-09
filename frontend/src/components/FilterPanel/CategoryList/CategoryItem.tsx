import { FC, type ReactElement } from "react"
import Button from "../../Button/Button.tsx"
import styled from "styled-components"
import { colors, fontWeights } from "../../../styles/theme.ts"
import { useSearchParams } from "../../../store/hooks.ts"

interface CategoryItemProps {
  name: string
  onClick: (category: string) => void
}

const CategoryItemStyle = styled.li`
  list-style: none;
  white-space: nowrap;
  font-weight: ${fontWeights.regular};
`

const CategoryItem: FC<CategoryItemProps> = ({
  name,
  onClick,
}): ReactElement => {
  const { category } = useSearchParams()
  const isActive = category === name

  return (
    <CategoryItemStyle onClick={() => onClick(name)}>
      <Button
        bgColor={isActive ? colors.darkGrey : colors.lightGraySecondary}
        color={isActive ? colors.white : colors.black}
        hoverBgColor={colors.darkGrey}
        fontWeight={isActive ? fontWeights.bold : fontWeights.regular}>
        {name}
      </Button>
    </CategoryItemStyle>
  )
}

export default CategoryItem
