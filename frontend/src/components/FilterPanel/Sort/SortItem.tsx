import { type FC, type ReactElement } from "react"
import { TSortOption } from "../../../constants.ts"
import Img from "../../Img/Img.tsx"
import styled from "styled-components"
import { colors } from "../../../styles/theme.ts"
import { setOrdering } from "../../../store/slice/searchParamsSlice.ts"
import useAppDispatch from "../../../store/hooks/useAppDispatch.ts"

interface SortItemProps {
  option: TSortOption
}

const SortItemStyle = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: ${colors.black};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`

const SortItem: FC<SortItemProps> = ({ option }): ReactElement => {
  const dispatch = useAppDispatch()

  const handleSetOrdering = (option: TSortOption) => {
    dispatch(setOrdering(option))
  }

  return (
    <SortItemStyle
      key={option.ordering}
      onClick={() => handleSetOrdering(option)}>
      <Img src={option.icon} />
      {option.label}
    </SortItemStyle>
  )
}

export default SortItem
