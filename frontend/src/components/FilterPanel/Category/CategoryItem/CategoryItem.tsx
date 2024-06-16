import { FC, type ReactElement } from "react"
import Button from "../../../Button/Button.tsx"
import { colors, fontWeights } from "../../../../styles/theme.ts"
import useSearchParams from "../../../../store/hooks/useSearchParams.ts"
import { CategoryItemStyle } from "./CategoryItemStyle.tsx"

interface CategoryItemProps {
  name: string
  onClick: (category: string) => void
}

const CategoryItem: FC<CategoryItemProps> = ({
  name,
  onClick,
}): ReactElement => {
  const { category } = useSearchParams()
  const isActive = category.toLowerCase() === name.toLowerCase()

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
